import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    branches: []
}

export const branchSlice = createSlice({    
    name: 'branch',
    initialState,
    reducers: {
        setBranches: (state, action) => {
            state.branches = action.payload;
        },    
    },    
});

export const { setBranches } = branchSlice.actions;    

export const fetchBranches = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/branches');
        dispatch(setBranches(response.data));
    } catch (error) {
        console.error('Error fetching branches:', error);   
}

};
export const addBranch = (branch) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/branches', branch);
        dispatch(setBranches(response.data));
    } catch (error) {
        console.error('Error adding branch:', error);
    }
};

export const getSingleBranch = (branchId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/branches/${branchId}`);
    dispatch(setBranches(response.data));
  } catch (error) {
    console.error('Error fetching branch:', error);
  }
};

export default branchSlice.reducer