import {propertyDetailsAction} from "./propertyDetails-slice";
import {axiosInstance} from "../../utils/axios";

// fetch details of one specific property using property id
// receive the property id from the component
// start loading
// call backend api
// wait for response
// get property data
// send data to redux store
// if error, send error to redux store

export const getPropertyDetails = (id) => async (dispatch) => {
    try{
        dispatch(propertyDetailsAction.getListRequest());
        const response = await axiosInstance.get(`/v1/rent/listing/${id}`);
        console.log(response);
        if(!response){
            throw new Error("Could not fetch property details");
        }
        const {data} = response.data;
        dispatch(propertyDetailsAction.getPropertyDetails(data));
    } catch (error) {
        dispatch(propertyDetailsAction.getErrors(error.response.data.error));
    }
}