import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader.tsx";


const Dashboard = lazy(() => import('./pages/Dashboard.tsx'));
const Products = lazy(() => import('./pages/Products.tsx'));
const Transaction = lazy(() => import('./pages/Transaction.tsx'));
const Customer = lazy(() => import('./pages/Customer.tsx'));
const NewProduct = lazy(() => import('./pages/management/NewProduct.tsx'));
const ProductManagement = lazy(() => import('./pages/management/ProductManagement.tsx'));
const TransactionManagement = lazy(() => import('./pages/management/ProductManagement.tsx'));

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/product" element={<Products/>} />
        <Route path="/admin/transaction" element={<Transaction/>} />
        <Route path="/admin/customer" element={<Customer/>} />


        {/* charts */}
        <Route path="/admin/chart/bar" element={<BarCharts/>}></Route>
        <Route path="/admin/chart/pie" element={<PieCharts />} />
        <Route path="/admin/chart/line" element={<LineCharts />} />

        
        {/* apps */}
        <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/app/coupon" element={<Coupon />} />
        <Route path="/admin/app/toss" element={<Toss />} />


        {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct/>}></Route>
        <Route path="/admin/product/:id" element={<ProductManagement/>}></Route>    
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>}></Route>    

      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
