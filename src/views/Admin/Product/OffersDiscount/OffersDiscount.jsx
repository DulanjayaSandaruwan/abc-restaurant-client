import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { DiscountRounded, LocalOfferRounded } from "@mui/icons-material";
import Header from "./Header";
import Offer from "./Offer";
import Discount from "./Discount";

const OffersDiscount = () => {

  const tabs = [
    {
      label: "Offers",
      value: "Offers",
      icon: <DiscountRounded />,
      comp: <Offer />,
    },
    {
      label: "Discount",
      value: "Discount",
      icon: <LocalOfferRounded />,
      comp: <Discount />,
    }
  ];


  return (
    <>
      <Header />
      <div>
        <Tabs value="Offers" className="mt-10 ">
          <TabsHeader>
            {tabs.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {icon}{label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabs.map(({ value, comp }) => (
              <TabPanel key={value} value={value}>
                {comp}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}

export default OffersDiscount;