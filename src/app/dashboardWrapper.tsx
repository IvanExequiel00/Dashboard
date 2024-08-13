import NavBar from "./(components)/Navbar/navbar";
import SideBar from "./(components)/sidebar/sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      
      <SideBar />
      <main className={`flex flex-col w-full h-full py-7 px-9  bg-gray-50 md:pl-24`}>
        <NavBar />
        {children}
        </main>
      {" "}
    </div>
  );
};

export default DashboardWrapper;
