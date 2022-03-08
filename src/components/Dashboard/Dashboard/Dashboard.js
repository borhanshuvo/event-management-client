import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { UserContext } from "../../../App";
// import AddService from "../Admin/AddService/AddService";
// import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
// import ManageService from "../Admin/ManageService/ManageService";
// import OrderList from "../Admin/OrderList/OrderList";
// import Booking from "../Customer/Booking/Booking";
// import BookingList from "../Customer/BookingList/BookingList";
// import Review from "../Customer/Review/Review";
// import Sidebar from "../Sidebar/Sidebar";

const AddService = lazy(() => import("../Admin/AddService/AddService"));
const MakeAdmin = lazy(() => import("../Admin/MakeAdmin/MakeAdmin"));
const ManageService = lazy(() =>
  import("../Admin/ManageService/ManageService")
);
const OrderList = lazy(() => import("../Admin/OrderList/OrderList"));
const Booking = lazy(() => import("../Customer/Booking/Booking"));
const BookingList = lazy(() => import("../Customer/BookingList/BookingList"));
const Review = lazy(() => import("../Customer/Review/Review"));
const Sidebar = lazy(() => import("../Sidebar/Sidebar"));

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://rocky-plains-06049.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div className="overflow-hidden">
      <Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <Switch>
              {isAdmin && (
                <div>
                  <Route path="/dashboard/orderList">
                    <OrderList></OrderList>
                  </Route>

                  <Route path="/dashboard/addService">
                    <AddService></AddService>
                  </Route>

                  <Route path="/dashboard/addAdmin">
                    <MakeAdmin></MakeAdmin>
                  </Route>

                  <Route path="/dashboard/manageService">
                    <ManageService></ManageService>
                  </Route>
                </div>
              )}
              {/* <Route path="/dashboard/book">
                            <Booking></Booking>
                        </Route> */}

              {!isAdmin && (
                <div>
                  <Route path="/dashboard/book/:id">
                    <Booking></Booking>
                  </Route>

                  <Route path="/dashboard/bookingList">
                    <BookingList></BookingList>
                  </Route>

                  <Route path="/dashboard/review">
                    <Review></Review>
                  </Route>
                </div>
              )}
            </Switch>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
