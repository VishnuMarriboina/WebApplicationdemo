import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    employees: []
}

export const employeeSlice = createSlice({    
    name: 'employee',
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
        }
    }
}); 

export const { setEmployees } = employeeSlice.actions;

export const fetchEmployees = () => async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:5000/employees');
            dispatch(setEmployees(response.data));
        } catch (error) {
            console.error('Error fetching employees:', error);   
        }   

    }

    export const addEmployee = (employee) => async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/employees', employee);
            dispatch(setEmployees(response.data));
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    }

    export const getSingleEmployee = (employeeId) => async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:5000/employees/${employeeId}`);
        dispatch(setEmployees(response.data));
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

export default employeeSlice.reducer
