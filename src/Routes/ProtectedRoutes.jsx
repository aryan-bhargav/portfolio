import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertPopup from "../components/AlertPopup";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setShowAlert(true);

      const timeout = setTimeout(() => {
        setShouldRedirect(true); // Mark for redirect
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup
    }
  }, [token]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/admin/login", { replace: true });
    }
  }, [shouldRedirect, navigate]);

  if (!token && showAlert) {
    return <AlertPopup type="danger" message="Unauthorized! Please login first." />;
  }

  return children;
};

export default ProtectedRoute;
