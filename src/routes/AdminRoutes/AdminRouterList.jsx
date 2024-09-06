import { Component } from "react";

import Home from "../../views/Admin/home/home";
import Item from "../../views/Admin/Product/Item/Item"
import Category from "../../views/Admin/Product/Category/Category";
import OffersDiscount from "../../views/Admin/Product/OffersDiscount/OffersDiscount";
import Order from "../../views/Admin/Order/Order";
import Inquiry from "../../views/Admin/Inquiry/Inquiry";
import Notification from "../../views/Admin/Notification/Notification";
import Setting from "../../views/Admin/Setting/Setting";
import Staff from "../../views/Admin//User/Staff/Staff";
import Customer from "../../views/Admin//User/Customer/Customer";

export const adminRouterList = [
    { path: '', Component: Home },
    { path: 'user-staff', Component: Staff },
    { path: 'user-customer', Component: Customer },
    { path: 'item', Component: Item },
    { path: 'item-category', Component: Category },
    { path: 'item-offers', Component: OffersDiscount },
    { path: 'order', Component: Order },
    { path: 'inquiry', Component: Inquiry },
    { path: 'notification', Component: Notification },
    { path: 'setting', Component: Setting },
];