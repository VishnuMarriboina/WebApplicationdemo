// import React from 'react';
// import { useSelector } from 'react-redux';

// const DataDisplay = ({ activeTab }) => {
//   const { companies, branches, employees } = useSelector(state => state.data);

//   const styles = {
//     container: {
//       padding: '20px 0'
//     },
//     grid: {
//       display: 'grid',
//       gap: '20px',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
//     },
//     card: {
//       backgroundColor: '#fff',
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//       padding: '20px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease'
//     },
//     cardHover: {
//       transform: 'translateY(-2px)',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
//     },
//     cardHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '15px',
//       marginBottom: '15px'
//     },
//     cardImage: {
//       width: '50px',
//       height: '50px',
//       borderRadius: '8px',
//       objectFit: 'cover',
//       backgroundColor: '#f0f0f0'
//     },
//     cardTitle: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       color: '#333',
//       margin: 0
//     },
//     cardSubtitle: {
//       fontSize: '14px',
//       color: '#666',
//       margin: '2px 0 0 0'
//     },
//     cardBody: {
//       display: 'grid',
//       gap: '8px'
//     },
//     fieldRow: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '4px 0',
//       borderBottom: '1px solid #f0f0f0'
//     },
//     fieldLabel: {
//       fontSize: '12px',
//       color: '#666',
//       fontWeight: '500',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px'
//     },
//     fieldValue: {
//       fontSize: '14px',
//       color: '#333',
//       fontWeight: '400',
//       textAlign: 'right',
//       maxWidth: '60%',
//       wordBreak: 'break-word'
//     },
//     noData: {
//       textAlign: 'center',
//       padding: '60px 20px',
//       color: '#666'
//     },
//     noDataIcon: {
//       fontSize: '48px',
//       marginBottom: '20px',
//       opacity: 0.3
//     },
//     noDataText: {
//       fontSize: '18px',
//       marginBottom: '10px'
//     },
//     noDataSubtext: {
//       fontSize: '14px',
//       color: '#999'
//     },
//     badge: {
//       display: 'inline-block',
//       padding: '4px 8px',
//       borderRadius: '12px',
//       fontSize: '12px',
//       fontWeight: '500',
//       backgroundColor: '#e3f2fd',
//       color: '#1976d2'
//     },
//     hierarchyInfo: {
//       backgroundColor: '#f8f9fa',
//       padding: '10px',
//       borderRadius: '5px',
//       marginTop: '10px',
//       fontSize: '12px',
//       color: '#666'
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString();
//   };

//   const getCompanyName = (companyId) => {
//     const company = companies?.find(c => c._id === companyId);
//     return company ? company.name : 'Unknown Company';
//   };

//   const getBranchName = (branchId) => {
//     const branch = branches?.find(b => b._id === branchId);
//     return branch ? branch.name : 'Unknown Branch';
//   };

//   const renderCompanies = () => {
//     if (!companies || companies.length === 0) {
//       return (
//         <div style={styles.noData}>
//           <div style={styles.noDataIcon}>🏢</div>
//           <div style={styles.noDataText}>No Companies Yet</div>
//           <div style={styles.noDataSubtext}>Click "Add Company" to get started</div>
//         </div>
//       );
//     }

//     return (
//       <div style={styles.grid}>
//         {companies.map(company => (
//           <div key={company._id} style={styles.card}>
//             <div style={styles.cardHeader}>
//               {company.image ? (
//                 <img src={company.image} alt={company.name} style={styles.cardImage} />
//               ) : (
//                 <div style={{...styles.cardImage, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
//                   🏢
//                 </div>
//               )}
//               <div>
//                 <h3 style={styles.cardTitle}>{company.name}</h3>
//                 <p style={styles.cardSubtitle}>{company.industry}</p>
//               </div>
//             </div>
//             <div style={styles.cardBody}>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Email</span>
//                 <span style={styles.fieldValue}>{company.email}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Phone</span>
//                 <span style={styles.fieldValue}>{company.phone}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Headquarters</span>
//                 <span style={styles.fieldValue}>{company.headquarters}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Established</span>
//                 <span style={styles.fieldValue}>{company.establishedYear}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>CEO</span>
//                 <span style={styles.fieldValue}>{company.CEO}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Chairman</span>
//                 <span style={styles.fieldValue}>{company.chairman}</span>
//               </div>
//             </div>
//             <div style={styles.hierarchyInfo}>
//               Branches: {branches?.filter(b => b.company === company._id).length || 0} |
//               Employees: {employees?.filter(e => e.company === company._id).length || 0}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderBranches = () => {
//     if (!branches || branches.length === 0) {
//       return (
//         <div style={styles.noData}>
//           <div style={styles.noDataIcon}>🏪</div>
//           <div style={styles.noDataText}>No Branches Yet</div>
//           <div style={styles.noDataSubtext}>Add companies first, then create branches</div>
//         </div>
//       );
//     }

//     return (
//       <div style={styles.grid}>
//         {branches.map(branch => (
//           <div key={branch._id} style={styles.card}>
//             <div style={styles.cardHeader}>
//               {branch.image ? (
//                 <img src={branch.image} alt={branch.name} style={styles.cardImage} />
//               ) : (
//                 <div style={{...styles.cardImage, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
//                   🏪
//                 </div>
//               )}
//               <div>
//                 <h3 style={styles.cardTitle}>{branch.name}</h3>
//                 <p style={styles.cardSubtitle}>{getCompanyName(branch.company)}</p>
//               </div>
//             </div>
//             <div style={styles.cardBody}>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Email</span>
//                 <span style={styles.fieldValue}>{branch.email}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Phone</span>
//                 <span style={styles.fieldValue}>{branch.phone}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Address</span>
//                 <span style={styles.fieldValue}>{branch.address}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Manager</span>
//                 <span style={styles.fieldValue}>{branch.manager}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Staff Count</span>
//                 <span style={styles.fieldValue}>
//                   <span style={styles.badge}>{branch.staff}</span>
//                 </span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Created</span>
//                 <span style={styles.fieldValue}>{formatDate(branch.createdAt)}</span>
//               </div>
//             </div>
//             <div style={styles.hierarchyInfo}>
//               Employees: {employees?.filter(e => e.branch === branch._id).length || 0}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderEmployees = () => {
//     if (!employees || employees.length === 0) {
//       return (
//         <div style={styles.noData}>
//           <div style={styles.noDataIcon}>👥</div>
//           <div style={styles.noDataText}>No Employees Yet</div>
//           <div style={styles.noDataSubtext}>Add companies and branches first, then add employees</div>
//         </div>
//       );
//     }

//     return (
//       <div style={styles.grid}>
//         {employees.map(employee => (
//           <div key={employee._id} style={styles.card}>
//             <div style={styles.cardHeader}>
//               {employee.image ? (
//                 <img src={employee.image} alt={employee.name} style={styles.cardImage} />
//               ) : (
//                 <div style={{...styles.cardImage, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
//                   👤
//                 </div>
//               )}
//               <div>
//                 <h3 style={styles.cardTitle}>{employee.name}</h3>
//                 <p style={styles.cardSubtitle}>{employee.role}</p>
//               </div>
//             </div>
//             <div style={styles.cardBody}>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Email</span>
//                 <span style={styles.fieldValue}>{employee.email}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Phone</span>
//                 <span style={styles.fieldValue}>{employee.phone}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Company</span>
//                 <span style={styles.fieldValue}>{getCompanyName(employee.company)}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Branch</span>
//                 <span style={styles.fieldValue}>{getBranchName(employee.branch)}</span>
//               </div>
//               <div style={styles.fieldRow}>
//                 <span style={styles.fieldLabel}>Joined</span>
//                 <span style={styles.fieldValue}>{formatDate(employee.dateofjoining)}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'companies':
//         return renderCompanies();
//       case 'branches':
//         return renderBranches();
//       case 'employees':
//         return renderEmployees();
//       default:
//         return <div>Select a tab to view data</div>;
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {renderContent()}
//     </div>
//   );
// };

// export default DataDisplay;

import React, { useState, useMemo } from "react";

const ExpensiveComponent = ({ number }) => {
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + number;
  }, [number]);
  console.log("Rendering...");

  return <div>Result: {expensiveCalculation}</div>;
};

const DataDisplay = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          setNumber(count);
        }}
      >
        Re-render{count}
      </button>
      <ExpensiveComponent number={number} />
    </div>
  );
};

export default DataDisplay;
