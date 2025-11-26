import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    companies: []
}

export const companySlice = createSlice({    
    name: 'company',
    initialState,
    reducers: {
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },        
    },        
});

export const { setCompanies } = companySlice.actions;    
export const fetchCompanies = () => async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:5000/companies/allcompaniesdetails');
            dispatch(setCompanies(response.data));
        } catch (error) {
            console.error('Error fetching companies:', error);   
        }   

    }

    export const addCompany = (company) => async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/companies/createcompanies', company);
            dispatch(setCompanies(response.data));
        } catch (error) {
            console.error('Error adding company:', error);
        }
    }

    export const getSingleCompany = (companyId) => async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/companies/singlecompany', companyId);
            dispatch(setCompanies(response.data));
        } catch (error) {
            console.error('Error adding company:', error);
        }
    }
    export default companySlice.reducer