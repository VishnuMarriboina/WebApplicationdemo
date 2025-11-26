import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CompanyForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    description: '',
    image: '',
    industry: '',
    registrationNumber: '',
    headquarters: '',
    establishedYear: '',
    chairman: '',
    CEO: ''
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
    inputFocus: {
      borderColor: '#4CAF50'
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
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Company name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = 'Registration number is required';
    if (!formData.headquarters.trim()) newErrors.headquarters = 'Headquarters is required';
    if (!formData.establishedYear) newErrors.establishedYear = 'Established year is required';
    else if (formData.establishedYear < 1800 || formData.establishedYear > new Date().getFullYear()) {
      newErrors.establishedYear = 'Please enter a valid year';
    }
    if (!formData.chairman.trim()) newErrors.chairman = 'Chairman name is required';
    if (!formData.CEO.trim()) newErrors.CEO = 'CEO name is required';

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
      // Dispatch action to add company
      // dispatch(addCompany(formData));
      console.log('Company Data:', formData);
      onClose();
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  return (
    <div>
      <h2 style={styles.title}>Add New Company</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Company Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {})
              }}
              placeholder="Enter company name"
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Industry *</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.industry ? styles.inputError : {})
              }}
              placeholder="e.g., Technology, Healthcare"
            />
            {errors.industry && <span style={styles.error}>{errors.industry}</span>}
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
              placeholder="company@example.com"
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
            placeholder="Full company address"
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
            placeholder="Brief description of the company"
          />
          {errors.description && <span style={styles.error}>{errors.description}</span>}
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Registration Number *</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.registrationNumber ? styles.inputError : {})
              }}
              placeholder="Company registration number"
            />
            {errors.registrationNumber && <span style={styles.error}>{errors.registrationNumber}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Established Year *</label>
            <input
              type="number"
              name="establishedYear"
              value={formData.establishedYear}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.establishedYear ? styles.inputError : {})
              }}
              placeholder="e.g., 2000"
              min="1800"
              max={new Date().getFullYear()}
            />
            {errors.establishedYear && <span style={styles.error}>{errors.establishedYear}</span>}
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Headquarters *</label>
          <input
            type="text"
            name="headquarters"
            value={formData.headquarters}
            onChange={handleInputChange}
            style={{
              ...styles.input,
              ...(errors.headquarters ? styles.inputError : {})
            }}
            placeholder="Headquarters location"
          />
          {errors.headquarters && <span style={styles.error}>{errors.headquarters}</span>}
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Chairman *</label>
            <input
              type="text"
              name="chairman"
              value={formData.chairman}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.chairman ? styles.inputError : {})
              }}
              placeholder="Chairman name"
            />
            {errors.chairman && <span style={styles.error}>{errors.chairman}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>CEO *</label>
            <input
              type="text"
              name="CEO"
              value={formData.CEO}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.CEO ? styles.inputError : {})
              }}
              placeholder="CEO name"
            />
            {errors.CEO && <span style={styles.error}>{errors.CEO}</span>}
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Company Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="https://example.com/company-logo.jpg"
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
          >
            Add Company
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;