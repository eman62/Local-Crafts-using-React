import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Button,
  PaginationItem,
  MenuItem,
} from "@mui/material";
import SideBare from "../Components/Product/SideBare";
import ProductCard from "../Components/Product/ProductCard";
import { filterProductsByCategory, getProductList } from "../api/Products";
import { getMainCatogryProducts, getSubProducts } from "../api/categories";
import Pagination from "@mui/material/Pagination";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Footer from "../Components/footer";

const imgStyle = {
  backgroundImage:
    "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNS~WGeV-YZqRjq2K8z8Y0ZkboQaagtzO5-~ymUeJIlX60tb1SC55m2oQyBFliP1EiOzkWEURNE9viaL6E0vYTdvH7P~RulSceiaY9gwYFYFMMkyzf5fnmSMUgf~Dxp6rOpk1B~sOm7SqUeKcz~EgBLM94fMIYVCyJFQ1q1lgcJXPGN1h10xJYAmYOOgfmDBnAd3TNVQ6eL7HYzFMmcJZwvOVdsKIp2u4gZMHsNSldRmhVtGMZNtNn6XSah0-OczpBON2Hsv2APcER2QvWhd3Xt6Sph~qZqySsvegLNQP~pGqH9THcGfJmY00y5dSxODa5DHoKMYqZ8ocffq0kdXHg__')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  objectFit: "cover",
  padding: "10%",
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getMainCatogryProducts();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await getSubProducts(categoryId);
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        let response;
        if (selectedSubCategory) {
          response = await getProductList(currentPage, null, selectedSubCategory);
        } else if (selectedMainCategory) {
          response = await getProductList(currentPage, selectedMainCategory);
        } else {
          response = await getProductList(currentPage);
        }
        setProducts(response.data.data);
        setTotalPages(response.data.meta.pageCount);
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };
    fetchProductList();
  }, [currentPage, selectedMainCategory, selectedSubCategory]);
  

 useEffect(() => {
  const fetchFilteredProducts = async () => {
    if (selectedMainCategory) {
      try {
        let filteredProducts
        
        if (selectedSubCategory) {
        
          filteredProducts = await filterProductsByCategory(selectedSubCategory);
        } else {
          
          filteredProducts = await filterProductsByCategory(selectedMainCategory);
        }
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    }
  };
  fetchFilteredProducts();
}, [selectedMainCategory, selectedSubCategory]);


  const handleCategorySelect = async (category) => {
    setSelectedMainCategory(category.name);
    setSelectedSubCategory(null);
    await fetchSubcategories(category._id);
  };

  const handleSubCategorySelect = (subCategory) => {
    setSelectedSubCategory(subCategory.name);
  };

  return (
    <>
      <Box sx={{ direction: "rtl" }}>
        <Box sx={imgStyle}>
          <Container>
            <Box
              mt={20}
              sx={{
                backgroundColor: "rgba(4, 28, 55, 0.5)",
                display: "flex",
                color: "rgba(255, 255, 255, 1)",
                width: { xs: "25%", sm: "15%", md: "9%" },
                padding: "3px",
                height: "23px",
              }}
            >
              <Box ml={1}>
                <svg
                  width="5"
                  height="23"
                  viewBox="0 0 5 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.208008"
                    width="4"
                    height="23"
                    fill="url(#paint0_linear_29_3859)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_29_3859"
                      x1="0.0946058"
                      y1="4.98333"
                      x2="5.15124"
                      y2="5.04578"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <Typography sx={{ fontSize: "1rem", fontFamily: "Rubik" }}>
                {" "}
                منتجاتنا
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "'Rubik', sans-serif",
              }}
            >
              قائمة المنتجات
            </Typography>
          </Container>
        </Box>
        <Box mt={10}>
          <Box sx={{ padding: "2%" }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <SideBare
                  data={categories}
                  onCategorySelect={handleCategorySelect}
                  subCategories={subCategories}
                  onSubCategorySelect={handleSubCategorySelect}
                  selectedSubCategory={selectedSubCategory}
                />
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Container>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box mt={2} ml={1}>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0H17V17H0V0Z"
                              fill="url(#paint0_linear_29_3925)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_29_3925"
                                x1="-29875"
                                y1="87704.3"
                                x2="-29853.6"
                                y2="87705.8"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#FFB629" />
                                <stop offset="0.507189" stop-color="#FFDA56" />
                                <stop offset="1" stop-color="#FFD7A6" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "'Rubik', sans-serif",
                            fontSize: { xs: "1.8rem", md: "3rem" },
                          }}
                        >
                          المنتجات
                        </Typography>
                      </Box>
                      {/* <Box sx={{ marginLeft: "13%", textAlign: "right" }}>
                      <FormControl
                        sx={{ minWidth: 180, padding: "5%" }}
                        dir="ltr"
                      >
                        <InputLabel
                          color="info"
                          id="demo-simple-select-autowidth-label"
                        >
                          <Typography
                            variant="h5"
                            sx={{ fontFamily: "'Rubik', sans-serif" }}
                          >
                            ترتيب حسب{" "}
                          </Typography>{" "}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={filter}
                          onChange={handleChange}
                          fullWidth
                          color="info"
                          label="ترتيب حسب"
                          dir="rtl"
                        >
                          <MenuItem value={"السعر"}>السعر</MenuItem>
                          <MenuItem value={"التقيم"}>التقيم</MenuItem>
                          <MenuItem value={"التاريخ"}>التاريخ</MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}
                    </Box>
                    {products && (
                      <Box mt={10}>
                        <Grid container spacing={4} sx={{ width: "90%" }}>
                          {products.map((product) => (
                            <Grid
                              item
                              key={product.id}
                              xs={12}
                              md={6}
                              sm={12}
                              lg={4}
                              mb={5}
                            >
                              <ProductCard data={product} />
                            </Grid>
                          ))}
                        </Grid>
                        <Box mt={5} display={"flex"} justifyContent={"center"}>
                          <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            boundaryCount={2}
                            shape="rounded"
                            renderItem={(item) => (
                              <PaginationItem
                                component={Button}
                                {...item}
                                sx={{
                                  backgroundColor: "#091242",
                                  color: "white",
                                  fontFamily: "rubik",
                                  padding: "1%",
                                }}
                              />
                            )}
                            prevIcon={<ArrowBack />}
                            nextIcon={<ArrowForward />}
                          />
                        </Box>
                      </Box>
                    )}
                  </Container>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductsPage;
