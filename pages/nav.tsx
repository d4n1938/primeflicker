import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Nav = () => {
  return (
    <>
      <nav>
        <IconButton color="primary" aria-label="delete" size="large">
          <Link href="/">
            <HomeIcon sx={{ fontSize: 60 }} />
          </Link>
        </IconButton>
      </nav>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        nav {
          width: 100%;
          text-align: right;
        }
      `}</style>
    </>
  );
};
export default Nav;
