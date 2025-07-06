import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4';

// Fetch all launches
export const fetchAllLaunches = () =>
  axios.get(`${API_URL}/launches`).then(res => res.data);

// Fetch upcoming launches
export const fetchUpcomingLaunches = () =>
  axios.get(`${API_URL}/launches/upcoming`).then(res => res.data);

// Fetch past launches
export const fetchPastLaunches = () =>
  axios.get(`${API_URL}/launches/past`).then(res => res.data);
