import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader.tsx";

const Dashboard = lazy(() => import('./pages/Dashboard.tsx'));
const Products = lazy(() => import('./pages/Products.tsx'));
const Transaction = lazy(() => import('./pages/Transaction.tsx'));
const Customer = lazy(() => import('./pages/Customer.tsx'));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/product" element={<Products/>} />
        <Route path="/admin/transaction" element={<Transaction/>} />
        <Route path="/admin/customer" element={<Customer/>} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
