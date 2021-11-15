import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import initializeAuthentication from "./Pages/Login/Firebase/Firebase.init";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
import AddProduct from "./Pages/AddProducts/AddProduct";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Payment from "./Pages/Payment/Payment";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";

initializeAuthentication();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <AllProducts></AllProducts>
            </Route>
            <AdminRoute path="/allbookings">
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <PrivateRoute path="/add-service">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/mybookings">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
