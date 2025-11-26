// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CompanyForm from './CompanyForm';
// import BranchForm from './BranchForm';
// import EmployeeForm from './EmployeeForm';
// import DataDisplay from './DataDisplay';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('companies');
//   const [activeForm, setActiveForm] = useState(null);

//   const dispatch = useDispatch();
//   const { companies, branches, employees, loading, error } = useSelector(state => state.data);

//   useEffect(() => {
//     // Fetch initial data
//     // dispatch(fetchCompanies());
//     // dispatch(fetchBranches());
//     // dispatch(fetchEmployees());
//   }, [dispatch]);

//   const styles = {
//     container: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f5f5f5',
//       minHeight: '100vh',
//       padding: '20px'
//     },
//     header: {
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     },
//     title: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       color: '#333',
//       margin: '0 0 10px 0'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: '#666',
//       margin: 0
//     },
//     nav: {
//       backgroundColor: '#fff',
//       padding: '15px',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       display: 'flex',
//       gap: '10px',
//       flexWrap: 'wrap'
//     },
//     navButton: {
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       transition: 'all 0.3s ease'
//     },
//     activeNavButton: {
//       backgroundColor: '#4CAF50',
//       color: 'white'
//     },
//     inactiveNavButton: {
//       backgroundColor: '#e0e0e0',
//       color: '#333'
//     },
//     addButton: {
//       backgroundColor: '#2196F3',
//       color: 'white',
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       marginLeft: 'auto'
//     },
//     content: {
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       minHeight: '500px'
//     },
//     stats: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '20px',
//       marginBottom: '30px'
//     },
//     statCard: {
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       border: '1px solid #e9ecef'
//     },
//     statNumber: {
//       fontSize: '32px',
//       fontWeight: 'bold',
//       color: '#4CAF50',
//       margin: '0 0 5px 0'
//     },
//     statLabel: {
//       fontSize: '14px',
//       color: '#666',
//       margin: 0
//     },
//     modal: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       maxWidth: '600px',
//       width: '90%',
//       maxHeight: '80vh',
//       overflow: 'auto'
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '10px',
//       right: '15px',
//       background: 'none',
//       border: 'none',
//       fontSize: '24px',
//       cursor: 'pointer',
//       color: '#666'
//     }
//   };

//   const renderForm = () => {
//     switch(activeForm) {
//       case 'company':
//         return <CompanyForm onClose={() => setActiveForm(null)} />;
//       case 'branch':
//         return <BranchForm onClose={() => setActiveForm(null)} />;
//       case 'employee':
//         return <EmployeeForm onClose={() => setActiveForm(null)} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>Company Management Dashboard</h1>
//         <p style={styles.subtitle}>Manage companies, branches, and employees</p>
//       </div>

//       {/* Statistics */}
//       <div style={styles.stats}>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{companies?.length || 0}</h2>
//           <p style={styles.statLabel}>Total Companies</p>
//         </div>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{branches?.length || 0}</h2>
//           <p style={styles.statLabel}>Total Branches</p>
//         </div>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{employees?.length || 0}</h2>
//           <p style={styles.statLabel}>Total Employees</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div style={styles.nav}>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'companies' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('companies')}
//         >
//           Companies
//         </button>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'branches' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('branches')}
//         >
//           Branches
//         </button>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'employees' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('employees')}
//         >
//           Employees
//         </button>

//         <button
//           style={styles.addButton}
//           onClick={() => setActiveForm(activeTab.slice(0, -1))} // Remove 's' from plural
//         >
//           Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
//         </button>
//       </div>

//       {/* Content */}
//       <div style={styles.content}>
//         {loading && <div>Loading...</div>}
//         {error && <div style={{color: 'red'}}>Error: {error}</div>}
//         <DataDisplay activeTab={activeTab} />
//       </div>

//       {/* Modal for forms */}
//       {activeForm && (
//         <div style={styles.modal}>
//           <div style={{...styles.modalContent, position: 'relative'}}>
//             <button
//               style={styles.closeButton}
//               onClick={() => setActiveForm(null)}
//             >
//               ×
//             </button>
//             {renderForm()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchCompanies, fetchBranches, fetchEmployees } from './store';
// import { fetchBranches } from '../Redux/branchSlice';
// import { fetchCompanies } from '../Redux/companySlice';
// import { fetchEmployees } from '../Redux/employeeSlice';
// import CompanyForm from './CompanyForm';
// import BranchForm from './BranchForm';
// import EmployeeForm from './EmployeeForm';
// import DataDisplay from './DataDisplay';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('companies');
//   const [activeForm, setActiveForm] = useState(null);

//   const dispatch = useDispatch();
// //   const { companies, branches, employees, loading, error } = useSelector(state => state.data);

//   useEffect(() => {
//     // Fetch initial data
//     dispatch(fetchCompanies());
//     dispatch(fetchBranches());
//     dispatch(fetchEmployees());
//   }, [dispatch]);

//   const styles = {
//     container: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f5f5f5',
//       minHeight: '100vh',
//       padding: '20px'
//     },
//     header: {
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     },
//     title: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       color: '#333',
//       margin: '0 0 10px 0'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: '#666',
//       margin: 0
//     },
//     nav: {
//       backgroundColor: '#fff',
//       padding: '15px',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       display: 'flex',
//       gap: '10px',
//       flexWrap: 'wrap'
//     },
//     navButton: {
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       transition: 'all 0.3s ease'
//     },
//     activeNavButton: {
//       backgroundColor: '#4CAF50',
//       color: 'white'
//     },
//     inactiveNavButton: {
//       backgroundColor: '#e0e0e0',
//       color: '#333'
//     },
//     addButton: {
//       backgroundColor: '#2196F3',
//       color: 'white',
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       marginLeft: 'auto'
//     },
//     content: {
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       minHeight: '500px'
//     },
//     stats: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '20px',
//       marginBottom: '30px'
//     },
//     statCard: {
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       border: '1px solid #e9ecef'
//     },
//     statNumber: {
//       fontSize: '32px',
//       fontWeight: 'bold',
//       color: '#4CAF50',
//       margin: '0 0 5px 0'
//     },
//     statLabel: {
//       fontSize: '14px',
//       color: '#666',
//       margin: 0
//     },
//     modal: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       maxWidth: '600px',
//       width: '90%',
//       maxHeight: '80vh',
//       overflow: 'auto'
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '10px',
//       right: '15px',
//       background: 'none',
//       border: 'none',
//       fontSize: '24px',
//       cursor: 'pointer',
//       color: '#666'
//     }
//   };

//   const renderForm = () => {
//     switch(activeForm) {
//       case 'company':
//         return <CompanyForm onClose={() => setActiveForm(null)} />;
//       case 'branch':
//         return <BranchForm onClose={() => setActiveForm(null)} />;
//       case 'employee':
//         return <EmployeeForm onClose={() => setActiveForm(null)} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>Company Management Dashboard</h1>
//         <p style={styles.subtitle}>Manage companies, branches, and employees</p>
//       </div>

//       {/* Statistics */}
//       <div style={styles.stats}>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{companies?.length || 0}</h2>
//           <p style={styles.statLabel}>Total Companies</p>
//         </div>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{branches?.length || 0}</h2>
//           <p style={styles.statLabel}>Total Branches</p>
//         </div>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{employees?.length || 0}</h2>
//           <p style={styles.statLabel}>Total Employees</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div style={styles.nav}>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'companies' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('companies')}
//         >
//           Companies
//         </button>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'branches' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('branches')}
//         >
//           Branches
//         </button>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'employees' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('employees')}
//         >
//           Employees
//         </button>

//         <button
//           style={styles.addButton}
//           onClick={() => setActiveForm(activeTab.slice(0, -1))} // Remove 's' from plural
//         >
//           Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
//         </button>
//       </div>

//       {/* Content */}
//       <div style={styles.content}>
//         {loading && <div>Loading...</div>}
//         {error && <div style={{color: 'red'}}>Error: {error}</div>}
//         <DataDisplay activeTab={activeTab} />
//       </div>

//       {/* Modal for forms */}
//       {activeForm && (
//         <div style={styles.modal}>
//           <div style={{...styles.modalContent, position: 'relative'}}>
//             <button
//               style={styles.closeButton}
//               onClick={() => setActiveForm(null)}
//             >
//               ×
//             </button>
//             {renderForm()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react';
// import CompanyForm from './CompanyForm';
// import BranchForm from './BranchForm';
// import EmployeeForm from './EmployeeForm';
// import DataDisplay from './DataDisplay';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('companies');
//   const [activeForm, setActiveForm] = useState(null);

//   // Mock data for UI only
//   const companies = [{ name: "Company A" }, { name: "Company B" }];
//   const branches = [{ name: "Branch A" }, { name: "Branch B" }, { name: "Branch C" }];
//   const employees = [{ name: "John" }, { name: "Jane" }, { name: "Doe" }, { name: "Alex" }];

//   const loading = false;
//   const error = null;

//   const styles = {
//     container: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f5f5f5',
//       minHeight: '100vh',
//       padding: '20px'
//     },
//     header: {
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     },
//     title: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       color: '#333',
//       margin: '0 0 10px 0'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: '#666',
//       margin: 0
//     },
//     nav: {
//       backgroundColor: '#fff',
//       padding: '15px',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       display: 'flex',
//       gap: '10px',
//       flexWrap: 'wrap'
//     },
//     navButton: {
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       transition: 'all 0.3s ease'
//     },
//     activeNavButton: {
//       backgroundColor: '#4CAF50',
//       color: 'white'
//     },
//     inactiveNavButton: {
//       backgroundColor: '#e0e0e0',
//       color: '#333'
//     },
//     addButton: {
//       backgroundColor: '#2196F3',
//       color: 'white',
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       marginLeft: 'auto'
//     },
//     content: {
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       minHeight: '500px'
//     },
//     stats: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '20px',
//       marginBottom: '30px'
//     },
//     statCard: {
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       border: '1px solid #e9ecef'
//     },
//     statNumber: {
//       fontSize: '32px',
//       fontWeight: 'bold',
//       color: '#4CAF50',
//       margin: '0 0 5px 0'
//     },
//     statLabel: {
//       fontSize: '14px',
//       color: '#666',
//       margin: 0
//     },
//     modal: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       maxWidth: '600px',
//       width: '90%',
//       maxHeight: '80vh',
//       overflow: 'auto',
//       position: 'relative'
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '10px',
//       right: '15px',
//       background: 'none',
//       border: 'none',
//       fontSize: '24px',
//       cursor: 'pointer',
//       color: '#666'
//     }
//   };

//   const renderForm = () => {
//     switch (activeForm) {
//       case 'company':
//         return <CompanyForm onClose={() => setActiveForm(null)} />;
//       case 'branch':
//         return <BranchForm onClose={() => setActiveForm(null)} />;
//       case 'employee':
//         return <EmployeeForm onClose={() => setActiveForm(null)} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>Company Management Dashboard</h1>
//         <p style={styles.subtitle}>Manage companies, branches, and employees</p>
//       </div>

//       <div style={styles.stats}>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{companies.length}</h2>
//           <p style={styles.statLabel}>Total Companies</p>
//         </div>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{branches.length}</h2>
//           <p style={styles.statLabel}>Total Branches</p>
//         </div>
//         <div style={styles.statCard}>
//           <h2 style={styles.statNumber}>{employees.length}</h2>
//           <p style={styles.statLabel}>Total Employees</p>
//         </div>
//       </div>

//       <div style={styles.nav}>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'companies' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('companies')}
//         >
//           Companies
//         </button>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'branches' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('branches')}
//         >
//           Branches
//         </button>
//         <button
//           style={{
//             ...styles.navButton,
//             ...(activeTab === 'employees' ? styles.activeNavButton : styles.inactiveNavButton)
//           }}
//           onClick={() => setActiveTab('employees')}
//         >
//           Employees
//         </button>
//         <button
//           style={styles.addButton}
//           onClick={() => setActiveForm(activeTab.slice(0, -1))}
//         >
//           Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
//         </button>
//       </div>

//       <div style={styles.content}>
//         {loading && <div>Loading...</div>}
//         {error && <div style={{ color: 'red' }}>Error: {error}</div>}
//         <DataDisplay activeTab={activeTab} />
//       </div>

//       {activeForm && (
//         <div style={styles.modal}>
//           <div style={styles.modalContent}>
//             <button
//               style={styles.closeButton}
//               onClick={() => setActiveForm(null)}
//             >
//               ×
//             </button>
//             {renderForm()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("companies");
  const [activeForm, setActiveForm] = useState(null);

  const mockCompanies = [{}, {}, {}];
  const mockBranches = [{}, {}, {}, {}, {}, {}, {}];
  const mockEmployees = Array(12).fill({});

  const renderData = () => {
    switch (activeTab) {
      case "companies":
        return (
          <div style={styles.placeholderBox}>Company List Placeholder</div>
        );
      case "branches":
        return <div style={styles.placeholderBox}>Branch List Placeholder</div>;
      case "employees":
        return (
          <div style={styles.placeholderBox}>Employee List Placeholder</div>
        );
      default:
        return null;
    }
  };

  const renderForm = () => {
    return (
      <div style={styles.placeholderBox}>
        <h3>Add {activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}</h3>
        <p>Form UI goes here</p>
        <button onClick={() => setActiveForm(null)}>Close</button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Company Management Dashboard</h1>
        <p style={styles.subtitle}>Manage companies, branches, and employees</p>
      </div>

      {/* Statistics */}
      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>{mockCompanies.length}</h2>
          <p style={styles.statLabel}>Total Companies</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>{mockBranches.length}</h2>
          <p style={styles.statLabel}>Total Branches</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>{mockEmployees.length}</h2>
          <p style={styles.statLabel}>Total Employees</p>
        </div>
      </div>

      {/* Navigation */}
      <div style={styles.nav}>
        {["companies", "branches", "employees"].map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.navButton,
              ...(activeTab === tab
                ? styles.activeNavButton
                : styles.inactiveNavButton),
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}

        <button
          style={styles.addButton}
          onClick={() => setActiveForm(activeTab.slice(0, -1))}
        >
          Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
        </button>
      </div>

      {/* Content */}
      <div style={styles.content}>{renderData()}</div>
      <div style={styles.content}></div>

      {/* Modal */}
      {activeForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setActiveForm(null)}
            >
              ×
            </button>
            {renderForm()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    padding: "20px",
  },
  header: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    margin: 0,
  },
  nav: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  navButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  activeNavButton: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
  inactiveNavButton: {
    backgroundColor: "#e0e0e0",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#2196F3",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    marginLeft: "auto",
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    minHeight: "500px",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  statCard: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    border: "1px solid #e9ecef",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#4CAF50",
    margin: "0 0 5px 0",
  },
  statLabel: {
    fontSize: "14px",
    color: "#666",
    margin: 0,
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "80vh",
    overflow: "auto",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#666",
  },
  placeholderBox: {
    padding: "20px",
    border: "1px dashed #ccc",
    borderRadius: "6px",
    backgroundColor: "#fefefe",
    textAlign: "center",
    color: "#777",
  },
};
