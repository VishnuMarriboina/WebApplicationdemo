import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BranchForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { companies } = useSelector(state => state.data);
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    description: '',
    image: '',
    company: '',
    manager: '',
    staff: ''
  });

  const [errors, setErrors] = useState({});

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
    textarea: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '14px',
      outline: 'none',
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'Arial, sans-serif'
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
      border: '1px solid #bbdefb'
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Branch name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.company) newErrors.company = 'Please select a company';
    if (!formData.manager.trim()) newErrors.manager = 'Manager name is required';
    if (!formData.staff) newErrors.staff = 'Staff count is required';
    else if (formData.staff < 1) newErrors.staff = 'Staff count must be at least 1';

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
      // Dispatch action to add branch
      // dispatch(addBranch(formData));
      console.log('Branch Data:', formData);
      onClose();
    } catch (error) {
      console.error('Error adding branch:', error);
    }
  };

  return (
    <div>
      <h2 style={styles.title}>Add New Branch</h2>
      
      {companies && companies.length === 0 && (
        <div style={styles.note}>
          Note: You need to add at least one company before creating branches.
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Branch Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {})
              }}
              placeholder="Enter branch name"
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>

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
              placeholder="branch@example.com"
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

        <div style={styles.inputGroup}>
          <label style={styles.label}>Address *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            style={{
              ...styles.input,
              ...(errors.address ? styles.inputError : {})
            }}
            placeholder="Full branch address"
          />
          {errors.address && <span style={styles.error}>{errors.address}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={{
              ...styles.textarea,
              ...(errors.description ? styles.inputError : {})
            }}
            placeholder="Brief description of the branch"
          />
          {errors.description && <span style={styles.error}>{errors.description}</span>}
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Branch Manager *</label>
            <input
              type="text"
              name="manager"
              value={formData.manager}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.manager ? styles.inputError : {})
              }}
              placeholder="Manager name"
            />
            {errors.manager && <span style={styles.error}>{errors.manager}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Staff Count *</label>
            <input
              type="number"
              name="staff"
              value={formData.staff}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.staff ? styles.inputError : {})
              }}
              placeholder="Number of staff members"
              min="1"
            />
            {errors.staff && <span style={styles.error}>{errors.staff}</span>}
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Branch Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="https://example.com/branch-image.jpg"
          />
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
            disabled={companies && companies.length === 0}
          >
            Add Branch
          </button>
        </div>
      </form>
    </div>
  );
};

export default BranchForm;