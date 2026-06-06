import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FiUsers, FiPackage, FiShoppingBag, FiDollarSign, FiSettings } from 'react-icons/fi';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import api from '../services/api';
import Loading from '../components/common/Loading';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await api.get('/admin/dashboard');
      setStats(data.data);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading fullScreen />;
  }

  const { overview, recentOrders, monthlySales, topProducts } = stats;

  // Sales Chart Data
  const salesChartData = {
    labels: monthlySales.map((item) => `${item._id.month}/${item._id.year}`),
    datasets: [
      {
        label: 'Sales Revenue',
        data: monthlySales.map((item) => item.totalSales),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  // Top Products Chart Data
  const productsChartData = {
    labels: topProducts.map((item) => item.productInfo.title.substring(0, 20)),
    datasets: [
      {
        label: 'Units Sold',
        data: topProducts.map((item) => item.totalQuantity),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 146, 60, 0.8)',
        ],
      },
    ],
  };

  const navigation = [
    { name: 'Dashboard', path: '/admin', icon: <FiSettings /> },
    { name: 'Products', path: '/admin/products', icon: <FiPackage /> },
    { name: 'Orders', path: '/admin/orders', icon: <FiShoppingBag /> },
    { name: 'Users', path: '/admin/users', icon: <FiUsers /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 min-h-screen shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Admin Panel
            </h2>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Dashboard Overview
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Total Users</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    {overview.totalUsers}
                  </p>
                </div>
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <FiUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Total Products</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    {overview.totalProducts}
                  </p>
                </div>
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <FiPackage className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    {overview.totalOrders}
                  </p>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                  <FiShoppingBag className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    ₹{overview.totalRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <FiDollarSign className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Monthly Sales
              </h3>
              <Line data={salesChartData} options={{ responsive: true }} />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Top Selling Products
              </h3>
              <Bar data={productsChartData} options={{ responsive: true }} />
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Recent Orders
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400">
                      Order ID
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400">
                      Customer
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b border-gray-100 dark:border-gray-700"
                    >
                      <td className="py-3 px-4 text-gray-800 dark:text-white">
                        #{order._id.slice(-8).toUpperCase()}
                      </td>
                      <td className="py-3 px-4 text-gray-800 dark:text-white">
                        {order.userId.name}
                      </td>
                      <td className="py-3 px-4 text-gray-800 dark:text-white">
                        ₹{order.totalAmount.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
