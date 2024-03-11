
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Pagination, Typography, FormControl, InputLabel, Select,Button } from '@mui/material';
import SideBare from '../Components/Product/SideBare';
import ProductCard from '../Components/Product/ProductCard';
import { getProductList } from '../api/Products';
import { getMainCatogryProducts, getSubProducts } from '../api/categories';
import MenuItem from '@mui/material/MenuItem';
const imgStyle = {
    backgroundImage: "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNS~WGeV-YZqRjq2K8z8Y0ZkboQaagtzO5-~ymUeJIlX60tb1SC55m2oQyBFliP1EiOzkWEURNE9viaL6E0vYTdvH7P~RulSceiaY9gwYFYFMMkyzf5fnmSMUgf~Dxp6rOpk1B~sOm7SqUeKcz~EgBLM94fMIYVCyJFQ1q1lgcJXPGN1h10xJYAmYOOgfmDBnAd3TNVQ6eL7HYzFMmcJZwvOVdsKIp2u4gZMHsNSldRmhVtGMZNtNn6XSah0-OczpBON2Hsv2APcER2QvWhd3Xt6Sph~qZqySsvegLNQP~pGqH9THcGfJmY00y5dSxODa5DHoKMYqZ8ocffq0kdXHg__')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    objectFit: "cover",
    padding: "10%",
}
const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const cardsPerPage = 8;
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getMainCatogryProducts();
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);
    
    const fetchSubcategories = async (categoryId) => {
        try {
            const response = await getSubProducts(categoryId);
            setSubCategories(response.data);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };
    
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await getProductList(currentPage);
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching product list:', error);
            }
        };
        fetchProductList();
    }, [currentPage]);
    const [filter, setFilter] = React.useState('');
    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const filteredProducts = products.filter(product => {
        if (selectedSubCategory) {
            // Check if the product belongs to the selected subcategory
            return product.category.sub === selectedSubCategory;
        } else if (selectedCategory) {
            // Check if the product belongs to the selected main category or any of its subcategories
            return product.category.main === selectedCategory || subCategories.some(subcategory => subcategory.parent === selectedCategory && product.category.sub === subcategory._id);
        } else {
            return true; // If no category or subcategory is selected, return all products
        }
    });
    
    
    
    
    
    const handleCategorySelect = async (categoryId) => {
        console.log("Selected category:", categoryId);
        setSelectedCategory(categoryId);
        setSelectedSubCategory(null); // Clear selected subcategory
        await fetchSubcategories(categoryId);
    };
    
    const handleSubCategorySelect = (subCategoryId) => {
        console.log("Selected subcategory:", subCategoryId);
        setSelectedSubCategory(subCategoryId);
    };
    
    useEffect(() => {
        console.log("Filtered products:", filteredProducts);
    }, [filteredProducts]);
    
    const handlePaginationChange = (event, value) => {
        setCurrentPage(value);
    };
   

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

   

    return (
        <Box sx={{ direction: "rtl" }}>
            <Box sx={imgStyle}>
                {/* Your Header JSX code */}
            </Box>
            <Box mt={10}>
                <Box sx={{ padding: "2%" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                        <SideBare
                                  data={categories}
                                  onCategorySelect={handleCategorySelect}
                                  subCategories={subCategories}
                                  onSubCategorySelect={handleSubCategorySelect}
                                    selectedSubCategory={selectedSubCategory} // Pass selectedSubCategory state
                                    handleSubCategorySelect={handleSubCategorySelect} // Pass handleSubCategorySelect function
                         />
                        </Grid>
                        <Grid item xs={9}>
                            <Box>
                                <Container>
                                    {/* Your Filter and Product JSX code */}
                                    <Box mt={10}>
                                        <Grid container spacing={4} sx={{ width: "90%" }}>
                                        {filteredProducts.map(product => (
                                          <Grid item key={product.id} xs={12} md={6} lg={3} mb={5}>
                                          <ProductCard data={product} selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />
                                           </Grid>
                                         ))}

                                        </Grid>
                                        <Box style={{ padding: "10px", marginLeft: "39%" }}>
                                            <Button  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                                Previous
                                            </Button>
                                            <Button >{currentPage}</Button>
                                            <Button  onClick={() => handlePageChange(currentPage + 1)}>
                                                Next
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductsPage;