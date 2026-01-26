import { useState, useCallback } from 'react';

/**
 * Validation rules factory
 * Each rule returns an error message or empty string if valid
 */
const validationRules = {
  required: (value, fieldName) => {
    if (!value || value.trim() === '') {
      return `${fieldName} is required`;
    }
    return '';
  },

  minLength: (value, fieldName, min) => {
    if (value && value.trim().length < min) {
      return `${fieldName} must be at least ${min} characters`;
    }
    return '';
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  },
};

/**
 * Validate a single field against its rules
 * @param {string} value - Field value
 * @param {object} rules - Validation rules for this field
 * @param {string} fieldName - Display name for error messages
 * @returns {string} - Error message or empty string
 */
const validateField = (value, rules, fieldName) => {
  for (const [rule, ruleValue] of Object.entries(rules)) {
    let error = '';

    switch (rule) {
      case 'required':
        if (ruleValue) {
          error = validationRules.required(value, fieldName);
        }
        break;
      case 'minLength':
        error = validationRules.minLength(value, fieldName, ruleValue);
        break;
      case 'email':
        if (ruleValue) {
          error = validationRules.email(value);
        }
        break;
      default:
        break;
    }

    if (error) return error;
  }

  return '';
};

/**
 * Custom hook for form validation with inline validation support
 * 
 * @param {object} initialValues - Initial form values
 * @param {object} validationSchema - Validation rules per field
 * @returns {object} - Form state and handlers
 * 
 * @example
 * const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormValidation(
 *   { name: '', email: '' },
 *   {
 *     name: { required: true, minLength: 2, displayName: 'Name' },
 *     email: { required: true, email: true, displayName: 'Email' },
 *   }
 * );
 */
const useFormValidation = (initialValues, validationSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /**
   * Validate a single field and update errors state
   */
  const validateSingleField = useCallback((name, value) => {
    const fieldSchema = validationSchema[name];
    if (!fieldSchema) return '';

    const displayName = fieldSchema.displayName || name;
    const error = validateField(value, fieldSchema, displayName);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  }, [validationSchema]);

  /**
   * Validate all fields
   * @returns {boolean} - True if form is valid
   */
  const validateAllFields = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    for (const [name, schema] of Object.entries(validationSchema)) {
      const displayName = schema.displayName || name;
      const error = validateField(values[name], schema, displayName);

      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);

    // Mark all fields as touched
    const allTouched = Object.keys(validationSchema).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    return isValid;
  }, [values, validationSchema]);

  /**
   * Handle input change
   */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate on change if field was already touched
    if (touched[name]) {
      validateSingleField(name, value);
    }
  }, [touched, validateSingleField]);

  /**
   * Handle input blur - triggers inline validation
   */
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    validateSingleField(name, value);
  }, [validateSingleField]);

  /**
   * Handle form submission
   * @param {function} onSubmit - Callback if form is valid
   */
  const handleSubmit = useCallback((onSubmit) => (e) => {
    e.preventDefault();

    const isValid = validateAllFields();

    if (isValid) {
      onSubmit(values);
    }
  }, [values, validateAllFields]);

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  /**
   * Get field props helper - returns all props needed for an input
   */
  const getFieldProps = useCallback((name) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
  }), [values, handleChange, handleBlur]);

  /**
   * Get field state - returns error and touched state for styling
   */
  const getFieldState = useCallback((name) => ({
    error: errors[name] || '',
    touched: touched[name] || false,
    isInvalid: touched[name] && !!errors[name],
    isValid: touched[name] && !errors[name] && !!values[name],
  }), [errors, touched, values]);

  // Check if entire form is valid
  const isValid = Object.keys(validationSchema).every((name) => {
    const fieldSchema = validationSchema[name];
    const displayName = fieldSchema.displayName || name;
    return !validateField(values[name], fieldSchema, displayName);
  });

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    getFieldProps,
    getFieldState,
    validateAllFields,
  };
};

export default useFormValidation;
