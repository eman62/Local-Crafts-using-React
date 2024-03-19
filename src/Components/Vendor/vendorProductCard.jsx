import React, { useState, useEffect } from 'react';
import { getMainCatogryProducts, getSubProducts } from '../../api/categories';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { deleteProduct ,updateProduct} from '../../api/vendor';

const VendorProductCard = ({ product, onDelete }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const [newPhoto, setNewPhoto] = useState(null);
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [errors, setErrors] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    totalOrders: '',
    avgRating: '',
  });

  useEffect(() => {
    fetchMainCategories();
  }, []);

  useEffect(() => {
    if (editedProduct.category.main) {
      fetchSubCategories(editedProduct.category.main);
    }
  }, [editedProduct.category.main]);

  const fetchMainCategories = async () => {
    try {
      const response = await getMainCatogryProducts();
      setMainCategories(response.data);
    } catch (error) {
      console.error('Error fetching main categories:', error);
    }
  };

  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await getSubProducts(categoryId);
      setSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching sub categories:', error);
    }
  };

  const handleMainCategoryChange = (e) => {
    const categoryId = e.target.value;
    fetchSubCategories(categoryId);
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      category: {
        main: categoryId,
        sub: '', // Reset sub-category when main category changes
      },
    }));
  };

  const handleSubCategoryChange = (e) => {
    const subCategoryId = e.target.value;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      category: {
        ...prevProduct.category,
        sub: subCategoryId,
      },
    }));
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await deleteProduct(product._id, token);
      onDelete(product._id);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = () => {
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
    setEditedProduct(product);
    setNewPhoto(null);
    setErrors({
      name: '',
      price: '',
      description: '',
      category: '',
      totalOrders: '',
      avgRating: '',
    });
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem('token');

      // Validation for name
      if (editedProduct.name.length < 2 || editedProduct.name.length > 50) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: 'اسم المنتج يجب أن يكون بين 2 و 50 حرفًا.',
        }));
        return;
      }

      // Validation for price
      if (editedProduct.price <= 0 || isNaN(editedProduct.price)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          price: 'يجب أن يكون السعر رقمًا صالحًا وأكبر من الصفر.',
        }));
        return;
      }

      // Validation for description
      if (editedProduct.description.length < 20 || editedProduct.description.length > 500) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          description: 'الوصف يجب أن يكون بين 20 و 500 حرفًا.',
        }));
        return;
      }

      // Validation for category
      if (!editedProduct.category.main || !editedProduct.category.sub) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          category: 'يجب اختيار الفئة الرئيسية والفئة الفرعية.',
        }));
        return;
      }

      // Validation for totalOrders
      if (editedProduct.totalOrders < 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          totalOrders: 'يجب أن يكون عدد الطلبات الكلي أكبر من أو يساوي الصفر.',
        }));
        return;
      }

      // Validation for avgRating
      if (editedProduct.avgRating < 0 || editedProduct.avgRating > 5) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avgRating: 'يجب أن يكون التقييم العام بين 0 و 5 نجوم.',
        }));
        return;
      }

      // Proceed with updating the product if all validations pass
      const updatedFields = {
        name: editedProduct.name,
        price: parseFloat(editedProduct.price),
        description: editedProduct.description,
        photos: newPhoto ? [newPhoto] : editedProduct.photos,
        category: editedProduct.category,
        totalOrders: editedProduct.totalOrders,
        avgRating: editedProduct.avgRating,
      };

      const response = await updateProduct(editedProduct._id, updatedFields, token);
      console.log('Update Response:', response.data);

      setIsEditOpen(false);
      setErrors({
        name: '',
        price: '',
        description: '',
        category: '',
        totalOrders: '',
        avgRating: '',
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const photoUrl = URL.createObjectURL(file);
    setNewPhoto(photoUrl);
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  const getMainCategoryName = (categoryId) => {
    const category = mainCategories.find((cat) => cat._id === categoryId);
    return category ? category.name : 'غير محدد'; // Return the category name or a default value if not found
  };
  const getSubCategoryName = (subCategoryId) => {
    const subCategory = subCategories.find((subCat) => subCat._id === subCategoryId);
    return subCategory ? subCategory.name : 'غير محدد'; // Return the subcategory name or a default value if not found
  };
  return (
    <Box sx={{ direction: 'rtl' }} width={200}>
      <Card mb={10}>
        <CardMedia
          component="img"
          height={200}
          image={newPhoto ? newPhoto : product.photos[0]}
          alt="صوره المنتج"
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} onClick={handleEdit}>
            {editedProduct.name}
          </Typography>
          <Typography variant="body2">الوصف: {editedProduct.description}</Typography>
          <Typography variant="body2">السعر: {editedProduct.price}</Typography>
          <Typography variant="body2">التصنيف الاساسي: {getMainCategoryName(editedProduct.category.main)}</Typography>
          <Typography variant="body2">التصنيف الفرعي: {getSubCategoryName(editedProduct.category.sub)}</Typography>
          {/* Display error messages */}
          {errors.name && <Typography variant="body2" color="error">{errors.name}</Typography>}
          {errors.price && <Typography variant="body2" color="error">{errors.price}</Typography>}
          {errors.description && <Typography variant="body2" color="error">{errors.description}</Typography>}
          {errors.category && <Typography variant="body2" color="error">{errors.category}</Typography>}
          {errors.totalOrders && <Typography variant="body2" color="error">{errors.totalOrders}</Typography>}
          {errors.avgRating && <Typography variant="body2" color="error">{errors.avgRating}</Typography>}

          {isEditOpen && (
            <div>
              {/* Dropdown for main category */}
              <select value={editedProduct.category.main} onChange={handleMainCategoryChange}>
                <option value="">اختر الفئة الرئيسية</option>
                {mainCategories.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>

              {/* Dropdown for sub category */}
              <select value={editedProduct.category.sub} onChange={handleSubCategoryChange}>
                <option value="">اختر الفئة الفرعية</option>
                {subCategories.map((subCategory) => (
                  <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                ))}
              </select>

              {/* Rest of the form inputs */}
              <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
              <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} />
              <input type="text" name="description" value={editedProduct.description} onChange={handleInputChange} />
              {/* Add input for totalOrders and avgRating if needed */}
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
              <Button variant="contained" onClick={handleSaveEdit}>حفظ</Button>
              <Button variant="outlined" onClick={handleCloseEdit}>إلغاء</Button>
            </div>
          )}

          <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={handleEdit}>تعديل</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>حذف</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VendorProductCard;



