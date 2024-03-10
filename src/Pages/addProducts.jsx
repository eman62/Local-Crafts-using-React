import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import header from "../assets/Header2.jpeg";
import Footer from "../Components/footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { axiosInstance } from "../api/config";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {
  getMainCatogry,
  getMainCatogryProducts,
  getSubProducts,
  getSubService,
} from "../api/categories";

const AddProducts = () => {
  const [imageURL, setImageURL] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const token = localStorage.getItem("token");
  const [AddServiceOrProductData, setAddServiceOrProductData] = useState({
    name: "",
    price: "",
    description: "",
    photos: [],
    category: {
      main: "",
      sub: "",
    },
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
    description: "",
    photos: "",
    category: "",
  });

  const [serviceCategorie, setServiceCategorie] = useState([]);
  const [serviceSubCategories, setServiceSubCategories] = useState([]);
  const [selectedServiceCategorie, setSelectedServiceCategorie] = useState("");
  const [selectedServiceSubCategorie, setSelectedServiceSubCategorie] =
    useState("");
  const [productCategorie, setProductCategorie] = useState([]);
  const [productSubCategories, setProductSubCategories] = useState([]);
  const [selectedProductCategorie, setSelectedProductCategorie] = useState("");
  const [selectedProductSubCategorie, setSelectedProductSubCategorie] =
    useState("");

  const [productType, setProductType] = useState("service");
  const [openDialog, setOpenDialog] = useState(false);
  const resetForm = () => {
    setImageURL("");
    setImageURL2("");
    setAddServiceOrProductData({
      name: "",
      price: "",
      description: "",
      photos: [],
      category: {
        main: "",
        sub: "",
      },
    });
    setSelectedServiceCategorie("");
    setSelectedServiceSubCategorie("");
    setSelectedProductCategorie("");
    setSelectedProductSubCategorie("");
    setProductType("service");
  };
  useEffect(() => {
    getMainCatogry()
      .then((res) => {
        setServiceCategorie(res.data);
      })
      .catch((err) => console.log(err));
    getMainCatogryProducts()
      .then((res) => {
        setProductCategorie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedServiceCategorie) {
      getSubService(selectedServiceCategorie)
        .then((response) => {
          setServiceSubCategories(response.data);
        })
        .catch((error) => {
          console.error("Error fetching service subcategories:", error);
        });
    }
  }, [selectedServiceCategorie]);

  useEffect(() => {
    if (selectedProductCategorie) {
      getSubProducts(selectedProductCategorie)
        .then((response) => {
          setProductSubCategories(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product subcategories:", error);
        });
    }
  }, [selectedProductCategorie]);

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleFileChange = async (event, setImageURL) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "LocalCrafts");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dbtaj8rn6/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageURL(data.secure_url);

        setAddServiceOrProductData((prevState) => ({
          ...prevState,
          photos: [...prevState.photos, data.secure_url],
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          photos: "",
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = name === "price" ? parseFloat(value) : value;
    setAddServiceOrProductData((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));

    validateInput(name, parsedValue);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        if (value.length < 2 || value.length > 50) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "الاسم يجب أن يكون بين 2 و 50 حرفًا",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "",
          }));
        }
        break;
      case "price":
        if (value <= 0) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            price: "السعر يجب أن يكون أكبر من صفر",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            price: "",
          }));
        }
        break;
      case "description":
        if (value.length < 20 || value.length > 50) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: "الوصف يجب أن يكون بين 20 و 500 حرفًا",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: "",
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameError =
      AddServiceOrProductData.name.length < 2 ||
      AddServiceOrProductData.name.length > 50
        ? "الاسم يجب أن يكون بين 2 و 50 حرفًا"
        : "";
    const priceError =
      AddServiceOrProductData.price <= 0 ? "السعر يجب أن يكون أكبر من صفر" : "";
    const descriptionError =
      AddServiceOrProductData.description.length < 20 ||
      AddServiceOrProductData.description.length > 500
        ? "الوصف يجب أن يكون بين 20 و 500 حرفًا"
        : "";
    const photosError =
      AddServiceOrProductData.photos.length === 0
        ? "يرجى تحميل صورة واحدة على الأقل"
        : "";
    const categoryError =
      !AddServiceOrProductData.category.main ||
      !AddServiceOrProductData.category.sub
        ? "يرجى اختيار الفئة الرئيسية والفئة الفرعية"
        : "";

    setErrors({
      name: nameError,
      price: priceError,
      description: descriptionError,
      photos: photosError,
      category: categoryError,
    });

    if (
      nameError ||
      priceError ||
      descriptionError ||
      photosError ||
      categoryError
    ) {
      return;
    }

    try {
      const apiUrl = productType === "product" ? "/products" : "/services";
      await axiosInstance.post(apiUrl, AddServiceOrProductData, {
        headers: {
          token,
        },
      });
      console.log("Product added successfully!");
      setOpenDialog(true);
      resetForm();
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${header})`,
          height: "35vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgb(6,0,66,.7)",
            height: "100%",
            top: "0",
            right: "0",
            left: "0",
          }}
        ></Box>
        {/* Red Box */}
        <Box
          sx={{
            position: "absolute",
            width: "70vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "20vh",
            left: "50%",
            height: "148.5vh",
            transform: "translateX(-50%)",
            zIndex: 1,
            overflow: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* Header */}
          <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
            اضافه خدمه او منتج
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ direction: "rtl", mt: "5vh", mr: "15vw" }}>
              <RadioGroup
                row
                aria-label="productType"
                name="productType"
                value={productType}
                onChange={handleProductTypeChange}
                sx={{ marginBottom: "1vh" }}
              >
                <FormControlLabel
                  value="service"
                  control={<Radio />}
                  label="خدمة"
                />
                <FormControlLabel
                  value="product"
                  control={<Radio />}
                  label="منتج"
                />
              </RadioGroup>
              <Box sx={{ display: "flex", mb: "3vh" }}>
                {imageURL2 ? (
                  <Box
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={imageURL2}
                      alt="Product"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : (
                  <label htmlFor="icon-button-file">
                    <IconButton
                      sx={{ display: "block" }}
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCameraIcon
                        sx={{
                          fontSize: "5em",
                          textAlign: "center",
                          ml: "3vw",
                        }}
                      />
                      <input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, setImageURL2)}
                      />
                    </IconButton>
                  </label>
                )}

                {imageURL ? (
                  <Box
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: 10,
                      overflow: "hidden",
                      mr: "1vw",
                    }}
                  >
                    <img
                      src={imageURL}
                      alt="Product"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : (
                  <label htmlFor="icon-button-file">
                    <IconButton
                      sx={{ display: "block", ml: "10vw" }}
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCameraIcon
                        sx={{
                          fontSize: "5em",
                          textAlign: "center",
                          ml: "10vw",
                        }}
                      />
                      <input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        // value={AddServiceOrProductData.photos[0]}
                        onChange={(e) => handleFileChange(e, setImageURL)}
                      />
                    </IconButton>
                  </label>
                )}
              </Box>
              {errors.photos && (
                <Typography sx={{ color: "red" }}>{errors.photos}</Typography>
              )}

              <TextField
                name="name"
                id="standard-basic"
                label="العنوان"
                variant="standard"
                placeholder="ادخل الأسم "
                inputProps={{ style: { direction: "rtl" } }}
                sx={{ width: "30vw", textAlign: "start" }}
                InputLabelProps={{ direction: "rtl", textAlign: "start" }}
                value={AddServiceOrProductData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <Box sx={{ display: "flex", mb: "3vh" }}>
                {productType === "service" ? (
                  <div>
                    <TextField
                      id="standard-select-currency"
                      name="categorie"
                      select
                      label="القسم الاساسي"
                      value={selectedServiceCategorie}
                      required
                      variant="standard"
                      sx={{ width: "14vw", mt: "5vh" }}
                      onChange={(e) => {
                        setSelectedServiceCategorie(e.target.value);
                        setAddServiceOrProductData((prevState) => ({
                          ...prevState,
                          category: {
                            ...prevState.category,
                            main: e.target.value,
                          },
                        }));
                      }}
                    >
                      {serviceCategorie.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-select-currency"
                      name="subcategorie"
                      select
                      label="القسم الفرعي"
                      value={selectedServiceSubCategorie}
                      required
                      variant="standard"
                      sx={{
                        width: "14vw",
                        mt: "5vh",
                        mr: "2vw",
                      }}
                      onChange={(e) => {
                        setSelectedServiceSubCategorie(e.target.value);
                        setAddServiceOrProductData((prevState) => ({
                          ...prevState,
                          category: {
                            ...prevState.category,
                            sub: e.target.value,
                          },
                        }));
                      }}
                    >
                      {serviceSubCategories.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                ) : (
                  <div>
                    <TextField
                      id="standard-select-currency"
                      name="categorie"
                      select
                      label="القسم الاساسي"
                      value={selectedProductCategorie}
                      required
                      variant="standard"
                      sx={{ width: "14vw", mt: "5vh" }}
                      onChange={(e) => {
                        setSelectedProductCategorie(e.target.value);
                        setAddServiceOrProductData((prevState) => ({
                          ...prevState,
                          category: {
                            ...prevState.category,
                            main: e.target.value,
                          },
                        }));
                      }}
                    >
                      {productCategorie.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-select-currency"
                      name="subcategorie"
                      select
                      label="القسم الفرعي"
                      required
                      value={selectedProductSubCategorie}
                      variant="standard"
                      sx={{
                        width: "14vw",
                        mt: "5vh",
                        mr: "2vw",
                      }}
                      onChange={(e) => {
                        setSelectedProductSubCategorie(e.target.value);
                        setAddServiceOrProductData((prevState) => ({
                          ...prevState,
                          category: {
                            ...prevState.category,
                            sub: e.target.value,
                          },
                        }));
                      }}
                    >
                      {productSubCategories.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                )}
              </Box>

              <TextField
                id="standard-basic"
                name="price"
                label="السعر"
                variant="standard"
                placeholder="ادخل السعر"
                type="number"
                // inputProps={{ style: { direction: "rtl" } }}
                sx={{ width: "30vw", direction: "rtl", mb: "3vh" }}
                InputLabelProps={{ direction: "rtl" }}
                value={AddServiceOrProductData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />

              <Box sx={{ mt: "5vh", width: "55%", mb: "3vh" }}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="description"
                  label="الوصف"
                  multiline
                  maxRows={6}
                  sx={{ width: "30vw" }}
                  value={AddServiceOrProductData.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: 1,
                  justifyContent: "start",
                  marginLeft: "20%",
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    background:
                      "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                    border: 0,
                    color: "black",
                    height: 48,
                    padding: "0 2vw",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

                    marginTop: "2vh",
                    position: "relative",
                    borderRadius: 0,
                    textWrap: "nowrap",
                    fontSize: "1.5vw",
                    ml: "4vw",
                  }}
                >
                  اضافه
                  <Box
                    sx={{
                      position: "absolute",
                      background: "#DCE4E7",
                      width: "20%",
                      borderRadius: "50% 0 0",
                      bottom: "0",
                      height: "40%",
                      opacity: "70%",
                      right: "0",
                    }}
                  ></Box>
                </Button>
                <Button
                  sx={{
                    background:
                      "linear-gradient(90deg, #CCCCCC 0%, #CCCCCC 100%)",
                    border: 0,
                    color: "black",
                    height: 48,
                    padding: "0 2vw",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

                    marginTop: "2vh",
                    position: "relative",
                    borderRadius: 0,
                    textWrap: "nowrap",
                    fontSize: "1.5vw",
                  }}
                >
                  الغاء
                  <Box
                    sx={{
                      position: "absolute",
                      background: "#1F2A69",
                      width: "20%",
                      borderRadius: "50% 0 0",
                      bottom: "0",
                      height: "40%",
                      opacity: "70%",
                      right: "0",
                    }}
                  ></Box>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "140vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={8} sx={{ backgroundColor: "#091242" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                height: "100%",
              }}
            >
              <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>تمت الإضافة بنجاح!</DialogTitle>
                <DialogContent>
                  <Typography> مبروك تمت إضافة هذا العنصر بنجاح</Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)}>حسناً</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
        <Footer></Footer>
      </Box>
    </Box>
  );
};

export default AddProducts;