import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Pension() {
    const [pensionDetails, setPensionDetails] = useState(
        "00.00");
    const [pensionDetails2, setPensionDetails2] = useState(
        "00.00"
      );

  const getPension1 = async (e) => {
    e.preventDefault()
    try {
      console.log("Hello");
      var type='Superannuation'
      if(!document.getElementById("id1").value){
        type = 'Voluntary'
      }
      console.log();
      var body={
        type_of_retirement:type,
        date_of_birth:document.getElementById('dob').value,
        date_of_joining:document.getElementById('doj').value,
        date_of_retirement:document.getElementById('dor').value,
        sum_of_last_10_pay:document.getElementById('sum').value,
        sum_of_last_month_pay:0
      }
      console.log(body);
      const res = await axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}/main/pension_calculator/`,body
      );
      setPensionDetails(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  const getPension2 = async (e) => {
    e.preventDefault()
    try {
      var body={
          type_of_retirement:0,
        date_of_birth:0,
        date_of_joining:0,
        date_of_retirement:0,
        sum_of_last_10_pay:0,
        sum_of_last_month_pay:document.getElementById('sum2').value
      }
      console.log(body);
      const res = await axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}/main/pension_calculator/`,body
      );
      setPensionDetails2(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <div className="flex justify-evenly">
        <form className="w-full max-w-lg">
          <div className="text-2xl  mb-8 mt-5">Pension Calculator</div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Type of Retirement
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option id="id1">Superannuation</option>
                <option>Voulantary</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6"></div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                htmlFor="inline-password"
                
              >
                Date of Birth
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[10rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="dob"
                type="date"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                htmlFor="inline-password"
                
              >
                Date of Joining
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[10rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="doj"
                type="date"
                placeholder=""
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                htmlFor="inline-password"

              >
                Date of Retirement
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[10rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="dor"
                type="date"
                placeholder=""
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                htmlFor="inline-password"
              >
                Sum of Last 10 months earn (Basic Pay + NPA + SI +DP) (in Rs.)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[10rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="sum"
                type="text"
                placeholder="Rupees"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 flex justify-evenly">
            <div className="md:w-1/3 flex justify-end">
              <label
                className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                htmlFor="inline-password"
              >
                Pension
              </label>
              <div className="md:w-2/3 select-none">{pensionDetails}</div>
            </div>
            <div></div>
          </div>
          <div className="flex ml-12">
            <button className="btn btn-active btn-wide" style={{backgroundColor:"rgb(20 83 45 / var(--tw-bg-opacity))"}} onClick={getPension1}>Calculate</button>
          </div>
        </form>
        <div>
          <form className="w-full max-w-lg">
            <div className="text-2xl  mb-8 mt-5">Family Pension Calculator</div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                  htmlFor="inline-password"
                >
                  Sum of Last Month Emoluments (Basic Pay + NPA + SI + DP) (in
                  Rs.)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[10rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="sum2"
                  type="text"
                  placeholder="Rupees"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 flex justify-evenly">
            <div className="md:w-1/3 flex justify-end">
              <label
                className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 flex justify-center"
                htmlFor="inline-password"
              >
                Pension
              </label>
              <div className="md:w-2/3 select-none">{pensionDetails2}</div>
            </div>
            <div></div>
          </div>
            <div className="flex ml-12">
              <button className="btn btn-active btn-wide" style={{backgroundColor:"rgb(20 83 45 / var(--tw-bg-opacity))"}} onClick={getPension2}>Calculate</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Pension;
