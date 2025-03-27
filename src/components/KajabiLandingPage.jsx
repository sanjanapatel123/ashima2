import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  Rating,
  Select,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const Index = () => {
  const theme = useTheme();
  const [sortValue, setSortValue] = useState("Sort By");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);

  // Course data
  const featuredCourses = [
    {
      id: 1,
      title: "AI AND ML FOR BEGINNERS",
      description:
        "Learn the basics of AI and ML with hands-on projects and real-world applications",
      image: "https://example.com/ai-ml-course-1.jpg",
      rating: 4.5,
      reviewCount: 1234,
      price: 19.99,
      discount: true,
      bestseller: true,
      duration: "10 hours",
      level: "Beginner",
    },
    {
      id: 2,
      title: "AI AND ML FOR BEGINNERS",
      description:
        "Learn the basics of AI and ML with hands-on projects and real-world applications",
      image: "https://example.com/ai-ml-course-2.jpg",
      rating: 4.5,
      reviewCount: 1234,
      price: 19.99,
      discount: false,
      bestseller: false,
      duration: "10 hours",
      level: "Beginner",
    },
    {
      id: 3,
      title: "AI AND ML FOR BEGINNERS",
      description:
        "Learn the basics of AI and ML with hands-on projects and real-world applications",
      image: "https://example.com/ai-ml-course-3.jpg",
      rating: 4.5,
      reviewCount: 1234,
      price: 19.99,
      discount: true,
      bestseller: false,
      duration: "10 hours",
      level: "Beginner",
    },
    {
      id: 4,
      title: "AI AND ML FOR BEGINNERS",
      description:
        "Learn the basics of AI and ML with hands-on projects and real-world applications",
      image: "https://example.com/ai-ml-course-4.jpg",
      rating: 4.5,
      reviewCount: 1234,
      price: 19.99,
      discount: false,
      bestseller: true,
      duration: "10 hours",
      level: "Beginner",
    },
  ];

  const startingCourses = [
    {
      id: 1,
      title: "AI AND ML FOR BEGINNERS",
      price: 19.99,
      discount: true,
      image: "https://example.com/ai-ml-course-1.jpg",
    },
    {
      id: 2,
      title: "AI AND ML FOR BEGINNERS",
      price: 19.99,
      discount: false,
      image: "https://example.com/ai-ml-course-2.jpg",
    },
    {
      id: 3,
      title: "AI AND ML FOR BEGINNERS",
      price: 19.99,
      discount: true,
      image: "https://example.com/ai-ml-course-3.jpg",
    },
    {
      id: 4,
      title: "AI AND ML FOR BEGINNERS",
      price: 19.99,
      discount: false,
      image: "https://example.com/ai-ml-course-4.jpg",
    },
  ];

  const popularCategories = [
    "AI & ML",
    "Finance",
    "Cyber Security And Hacking",
    "Software Development",
    "Data Science And Engineering",
    "DevOps And Network",
    "Design And Development",
    "Business And Leadership",
    "No-Code",
    "Popular Content",
  ];

  const testimonials = [
    {
      id: 1,
      name: "NIHA SHARMA",
      avatar: "https://example.com/avatar1.jpg",
      text: "I've been using this platform for 6 months now and I'm extremely satisfied with the quality of courses. The instructors are knowledgeable and the content is up-to-date with industry standards. Highly recommend for anyone looking to upskill in AI and ML.",
      rating: 5,
    },
    {
      id: 2,
      name: "NIHA SHARMA",
      avatar: "https://example.com/avatar2.jpg",
      text: "I've been using this platform for 6 months now and I'm extremely satisfied with the quality of courses. The instructors are knowledgeable and the content is up-to-date with industry standards. Highly recommend for anyone looking to upskill in AI and ML.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "NIHA SHARMA",
      avatar: "https://example.com/avatar3.jpg",
      text: "I've been using this platform for 6 months now and I'm extremely satisfied with the quality of courses. The instructors are knowledgeable and the content is up-to-date with industry standards. Highly recommend for anyone looking to upskill in AI and ML.",
      rating: 5,
    },
  ];

  // Rating options for filter
  const ratingOptions = [5, 4, 3, 2, 1];

  // Price range options for filter
  const priceRanges = [
    "Under $50",
    "$50 to $100",
    "$100 to $150",
    "$150 to $200",
    "Over $200",
  ];

  // Duration options for filter
  const durationOptions = [
    "0-1 Hour",
    "1-3 Hours",
    "3-6 Hours",
    "6-17 Hours",
    "17+ Hours",
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Header/AppBar */}
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ bgcolor: "white", borderBottom: 1, borderColor: "divider" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 700, color: "primary.main", mr: 3 }}
          >
            AI SKILLS
          </Typography>

          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 300,
              height: 36,
              borderRadius: 2,
              mr: 2,
              pl: 1,
            }}
          >
            <SearchIcon sx={{ color: "text.secondary", fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search for anything"
              sx={{ ml: 1, flex: 1 }}
            />
          </Paper>

          <Button sx={{ mr: 1 }}>Courses</Button>
          <Button sx={{ mr: 1 }}>Reviews</Button>
          <Button sx={{ mr: 1 }} endIcon={<KeyboardArrowDownIcon />}>
            Digital Products
          </Button>
          <Button sx={{ mr: 1 }}>Businesses</Button>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton>
            <ShoppingCartIcon />
          </IconButton>

          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ ml: 1 }}
          >
            Log in
          </Button>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        {/* Main Content */}
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 3 }}>
          All AI & ML Courses
        </Typography>

        {/* Filters and Sort */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<KeyboardArrowDownIcon />}
              sx={{ borderColor: "grey.300", color: "text.primary" }}
            >
              Filter
            </Button>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
              <Select
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
                displayEmpty
                sx={{ borderColor: "grey.300", height: 36 }}
              >
                <MenuItem value="Sort By">Sort By</MenuItem>
                <MenuItem value="price_low">Price: Low to High</MenuItem>
                <MenuItem value="price_high">Price: High to Low</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
                <MenuItem value="newest">Newest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs />
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              500 RESULTS
            </Typography>
          </Grid>
        </Grid>

        {/* Main Layout with Filters and Courses */}
        <Grid container spacing={3}>
          {/* Left Sidebar - Filters */}
          <Grid item xs={12} md={3}>
            <Stack spacing={3}>
              {/* Ratings Filter */}
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                  Ratings
                </Typography>
                <Stack spacing={1}>
                  {ratingOptions.map((rating) => (
                    <Box
                      key={rating}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Rating
                              value={rating}
                              readOnly
                              size="small"
                              emptyIcon={<StarBorderIcon fontSize="inherit" />}
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              & up (
                              {rating === 5
                                ? "1,234"
                                : rating === 4
                                  ? "2,345"
                                  : rating === 3
                                    ? "3,456"
                                    : rating === 2
                                      ? "4,567"
                                      : "5,678"}
                              )
                            </Typography>
                          </Box>
                        }
                        sx={{ m: 0 }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Price Filter */}
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                  Price
                </Typography>
                <Stack spacing={1}>
                  {priceRanges.map((range) => (
                    <FormControlLabel
                      key={range}
                      control={<Checkbox size="small" />}
                      label={range}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Duration Filter */}
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                  Duration
                </Typography>
                <Stack spacing={1}>
                  {durationOptions.map((duration) => (
                    <FormControlLabel
                      key={duration}
                      control={<Checkbox size="small" />}
                      label={duration}
                    />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right Side - Course Cards */}
          <Grid item xs={12} md={9}>
            <Stack spacing={3}>
              {featuredCourses.map((course) => (
                <Card
                  key={course.id}
                  sx={{
                    display: "flex",
                    height: 180,
                    boxShadow: "none",
                    border: 1,
                    borderColor: "divider",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 320 }}
                    image={course.image}
                    alt={course.title}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto", p: 2 }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {course.description}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mr: 1 }}
                        >
                          {course.duration}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          • {course.level}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Rating
                          value={course.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                          emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 1 }}
                        >
                          ({course.reviewCount})
                        </Typography>
                      </Box>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        pt: 0,
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 600 }}
                      >
                        ${course.price}
                      </Typography>
                      <Box>
                        {course.bestseller && (
                          <Chip
                            label="Bestseller"
                            size="small"
                            sx={{
                              bgcolor: "warning.light",
                              color: "warning.dark",
                              mr: 1,
                              fontWeight: 500,
                            }}
                          />
                        )}
                        <Button
                          variant="contained"
                          color={course.discount ? "secondary" : "primary"}
                          size="small"
                        >
                          {course.discount ? "Discounted" : "Add to cart"}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              ))}

              {/* Pagination */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Pagination
                  count={10}
                  page={currentPage}
                  onChange={(e, page) => setCurrentPage(page)}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      sx={{
                        "&.Mui-selected": {
                          bgcolor: "primary.main",
                          color: "white",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* AI and ML Courses Section */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, textTransform: "uppercase", mb: 1 }}
          >
            AI and ML Courses
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Courses to get you started
          </Typography>

          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            sx={{ mb: 3 }}
          >
            <Tab label="Most Popular" />
            <Tab label="Trending" />
          </Tabs>

          <Box sx={{ position: "relative" }}>
            <Grid container spacing={2}>
              {startingCourses.map((course) => (
                <Grid item xs={12} sm={6} md={3} key={course.id}>
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "none",
                      border: 1,
                      borderColor: "divider",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={course.image}
                      alt={course.title}
                    />
                    <CardContent sx={{ p: 2 }}>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 600 }}
                      >
                        ${course.price}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Button
                        variant="contained"
                        color={course.discount ? "secondary" : "primary"}
                        size="small"
                        fullWidth
                      >
                        {course.discount ? "Discounted" : "Add to cart"}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: -20,
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                boxShadow: 2,
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Featured Courses Section */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            Featured Courses
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Explore courses from experienced, industry-leading experts
          </Typography>

          <Box sx={{ position: "relative" }}>
            <Card
              sx={{
                display: "flex",
                height: 220,
                boxShadow: "none",
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 320 }}
                image={featuredCourses[0].image}
                alt={featuredCourses[0].title}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ flex: "1 0 auto", p: 3 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {featuredCourses[0].title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {featuredCourses[0].description}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mr: 2 }}
                    >
                      {featuredCourses[0].duration}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • {featuredCourses[0].level}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating
                      value={featuredCourses[0].rating}
                      precision={0.5}
                      readOnly
                      size="small"
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      ({featuredCourses[0].reviewCount})
                    </Typography>
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 3,
                    pt: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 600 }}
                  >
                    ${featuredCourses[0].price}
                  </Typography>
                  <Button variant="contained" color="secondary" size="medium">
                    Discounted
                  </Button>
                </Box>
              </Box>
            </Card>

            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: -20,
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                boxShadow: 2,
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>

            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: -20,
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                boxShadow: 2,
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Popular Courses Categories */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Popular Courses
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
            {popularCategories.map((category, index) => (
              <Chip
                key={index}
                label={category}
                onClick={() => {}}
                sx={{
                  borderRadius: 1,
                  py: 0.5,
                  px: 1,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            WHY OUR LEARNERS LOVE US{" "}
            <FavoriteIcon color="error" sx={{ ml: 1 }} />
          </Typography>

          <Grid container spacing={3}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "none",
                    border: 1,
                    borderColor: "divider",
                    p: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ fontWeight: 600 }}
                    >
                      {testimonial.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 700, color: "primary.main", mb: 2 }}
                >
                  AI SKILLS
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" sx={{ color: "white" }}>
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "white" }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "white" }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "white" }}>
                    <YouTubeIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "white" }}>
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Company
              </Typography>
              <List disablePadding>
                {["About", "Careers", "Partnerships", "FAQ", "Blog"].map(
                  (item) => (
                    <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: "body2",
                          sx: { color: "grey.400" },
                        }}
                      />
                    </ListItem>
                  ),
                )}
              </List>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Support
              </Typography>
              <List disablePadding>
                {[
                  "Contact Us",
                  "Help Center",
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                ].map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: { color: "grey.400" },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Account
              </Typography>
              <List disablePadding>
                {[
                  "My Account",
                  "Subscriptions",
                  "Billing",
                  "Certificates",
                  "Gift Cards",
                ].map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: { color: "grey.400" },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
