import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { Stack, Typography, Autocomplete, TextField } from "@mui/material";
const MainNavigation = () => {
  return (
    <div className={classes.wrapper}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Typography className={classes.logo} sx={{ fontSize: "2rem" }}>
          oXch
        </Typography>
        <div>div 2</div>
        <div>div 3</div>
      </Stack>
    </div>
    // <header className={classes.header}>
    //   <nav>
    //     <ul className={classes.list}>
    //       <li>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             isActive ? classes.active : undefined
    //           }
    //           end={true}
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           // to="/products"
    //           to="products"
    //           className={({ isActive }) =>
    //             isActive ? classes.active : undefined
    //           }
    //         >
    //           Products
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default MainNavigation;
