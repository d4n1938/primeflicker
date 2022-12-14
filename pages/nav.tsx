import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav>
        <Link href="/">home</Link>
      </nav>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        nav {
          width: 100%;
          height: 50px;
        }
      `}</style>
    </>
  );
};
export default Nav;
