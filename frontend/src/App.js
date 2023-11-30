import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import EmployeesPage from './pages/EmployeesPage';
import AddEmployeeForm from './pages/AddEmployeeForm';
import EditEmployeeForm from './pages/EditEmployeeForm';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <main className="PageContent">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/employees" element={
                            <ProtectedRoute>
                                <EmployeesPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/add-employee" element={
                            <ProtectedRoute>
                                <AddEmployeeForm />
                            </ProtectedRoute>
                        } />
                        <Route path="/edit-employee/:id" element={
                            <ProtectedRoute>
                                <EditEmployeeForm />
                            </ProtectedRoute>
                        } />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;