import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import userImg from "../assets/userpic.png";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />

        <main className="dashboard">
          <div className="bar">
              <BsSearch/>
              <input type="text" placeholder="Search for data, users, docs" />
              <FaRegBell/>
              <img src={userImg} alt="User" />
          </div>

          <section className="widgetcontainer">
            <WidgetItem 
              percent={35}
              amount={true}
              value={76734687}
              heading="Revenue"
              color="rgb(0, 115, 255)"
              />

            <WidgetItem 
              percent={80}
              value={23000}
              heading="Transaction"
              color="rgb(255 196 0)"
              />

            <WidgetItem 
              percent={-71}
              value={400}
              heading="Users"
              color="rgb(0, 198, 202)"
              />

            <WidgetItem 
              percent={30}
              value={1000}
              heading="Products"
              color="rgb(76 0 255)"
              />
          </section>


          <section className="graphcontainer">

            <div className="revenuechart">
              <h2>Revenue & transactions</h2>
              <BarChart
                data_1={[300,144,433,655,237,755,190]}
                data_2={[200,444,343,556,778,455,990]}
                title_1="Revenue"
                title_2="Transaction"
                bgColor_1="rgb(0,115,255)"
                bgColor_2="rgb(53,162,235,0.8)"
              />
            </div>


            <div className="dashboardcategories">
              <h2>Inventory</h2>
              <div>
                {data.categories.map((i) => (
                  <CategoryItem 
                  key = {i.heading}
                  heading = {i.heading}
                  value = {i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
                ))}
              </div>
            </div>
          </section>


          <section className="transaction-container">
                <div className="gender-chart">
                  <h2>gender ratio</h2>
                  <DoughnutChart
                    labels={["Female", "Male"]}
                    data={[149,51]}
                    backgroundColor={["hsl(340, 82%, 56%)", "rgba(53, 162, 235, 0.8)"]}
                    cutout={85}
                  />
                  <p><BiMaleFemale/></p>
                </div>

                {/* table */}


          </section>


          </main>
    </div>
  );
};


interface WidgetItemProps{
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount ?: boolean;
} 

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => <article className="widget">

  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount ? `$${value}` : value}</h4>
    {percent > 0 ? (
      <span className="green"><HiTrendingUp/> +{percent}%</span>
    ) : (
      <span className="red"><HiTrendingDown/> {percent}%</span>
    )
    }
  </div>

    <div className="widgetCircle" style={{
      background:`conic-gradient(
        ${color} ${Math.abs(percent)/100*360}deg,
        rgb(255,255,255) 0
      )`
    }}>
      <span style = {{color}}>{percent}%</span>
    </div>
</article>


interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="categoryitem">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;