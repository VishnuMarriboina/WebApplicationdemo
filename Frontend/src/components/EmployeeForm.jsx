import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EmployeeForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { companies, branches } = useSelector(state => state.data);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
    company: '',
    branch: '',
    role: '',
    dateofjoining: ''
  });

  const [errors, setErrors] = useState({});
  const [filteredBranches, setFilteredBranches] = useState([]);

  const styles = {
    form: {
      display: 'grid',
      gap: '15px',
      maxWidth: '600px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center'
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    },
    fullWidth: {
      gridColumn: '1 / -1'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#333'
    },
    input: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    select: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    inputError: {
      borderColor: '#f44336'
    },
    error: {
      color: '#f44336',
      fontSize: '12px',
      marginTop: '2px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end',
      marginTop: '20px'
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    cancelButton: {
      backgroundColor: '#f44336',
      color: 'white'
    },
    note: {
      backgroundColor: '#e3f2fd',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      color: '#1976d2',
      border: '1px solid #bbdefb',
      marginBottom: '15px'
    }
  };

  // Filter branches based on selected company
  useEffect(() => {
    if (formData.company && branches) {
      const companyBranches = branches.filter(branch => branch.company === formData.company);
      setFilteredBranches(companyBranches);
      
      // Reset branch selection if current branch doesn't belong to selected company
      if (formData.branch && !companyBranches.find(b => b._id === formData.branch)) {
        setFormData(prev => ({ ...prev, branch: '' }));
      }
    } else {
      setFilteredBranches([]);
      setFormData(prev => ({ ...prev, branch: '' }));
    }
  }, [formData.company, branches]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Employee name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company) newErrors.company = 'Please select a company';
    if (!formData.branch) newErrors.branch = 'Please select a branch';
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!formData.dateofjoining) newErrors.dateofjoining = 'Date of joining is required';
    else {
      const joiningDate = new Date(formData.dateofjoining);
      const today = new Date();
      if (joiningDate > today) {
        newErrors.dateofjoining = 'Date of joining cannot be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Dispatch action to add employee
      // dispatch(addEmployee(formData));
      console.log('Employee Data:', formData);
      onClose();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div>
      <h2 style={styles.title}>Add New Employee</h2>
      
      {(!companies || companies.length === 0) && (
        <div style={styles.note}>
          Note: You need to add at least one company and branch before adding employees.
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Employee Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {})
              }}
              placeholder="Enter employee name"
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Role *</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.role ? styles.inputError : {})
              }}
              placeholder="e.g., Software Engineer, Manager"
            />
            {errors.role && <span style={styles.error}>{errors.role}</span>}
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              placeholder="employee@example.com"
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.phone ? styles.inputError : {})
              }}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && <span style={styles.error}>{errors.phone}</span>}
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Select Company *</label>
            <select
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              style={{
                ...styles.select,
                ...(errors.company ? styles.inputError : {})
              }}
            >
              <option value="">Select a company</option>
              {companies && companies.map(company => (
                <option key={company._id} value={company._id}>
                  {company.name}
                </option>
              ))}
            </select>
            {errors.company && <span style={styles.error}>{errors.company}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Select Branch *</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              style={{
                ...styles.select,
                ...(errors.branch ? styles.inputError : {})
              }}
              disabled={!formData.company}
            >
              <option value="">
                {!formData.company ? 'Select company first' : 'Select a branch'}
              </option>
              {filteredBranches.map(branch => (
                <option key={branch._id} value={branch._id}>
                  {branch.name}
                </option>
              ))}
            </select>
            {errors.branch && <span style={styles.error}>{errors.branch}</span>}
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Date of Joining *</label>
            <input
              type="date"
              name="dateofjoining"
              value={formData.dateofjoining}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.dateofjoining ? styles.inputError : {})
              }}
              max={getTodayDate()}
            />
            {errors.dateofjoining && <span style={styles.error}>{errors.dateofjoining}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Profile Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="https://example.com/profile.jpg"
            />
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button
            type="button"
            onClick={onClose}
            style={{...styles.button, ...styles.cancelButton}}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{...styles.button, ...styles.submitButton}}
            disabled={!companies || companies.length === 0}
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;