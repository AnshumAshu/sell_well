import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ManualBox = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [address, setAddress] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setSelectedDate(new Date());
        setSelectedTime('');
        setAddress('');
        setWeight('');
    };

    return (
        <div className="relative w-full sm:w-3/4 p-4 sm:p-8 mx-auto bg-white shadow-md rounded-lg">
            <div className='flex items-center justify-center mb-6'>
                <h1 className='font-bold text-3xl sm:text-4xl text-[#3ab44a]'>Book Your Slot</h1>
            </div>
            <form className="border border-solid border-black p-4 bg-gray-50 rounded-lg" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row mb-4">
                    <div className="sm:w-1/2 flex flex-col m-2">
                        <label className="block text-gray-700 font-medium mb-2">Select Date:</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="w-full p-2 border border-orange-500 rounded"
                        />
                    </div>
                    <div className="sm:w-1/2 flex flex-col m-2">
                        <label className="block text-gray-700 font-medium mb-2">Select Time:</label>
                        <input
                            type='time'
                            onChange={(e) => setSelectedTime(e.target.value)}
                            value={selectedTime}
                            className="w-full p-2 border border-orange-500 rounded"
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                        className="w-full p-2 border border-orange-500 rounded"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Estimated Weight:</label>
                    <input
                        type="number"
                        min={0}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter estimated weight in kg"
                        className="w-full p-2 border border-orange-500 rounded"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <button type='submit' className="m-2 p-2 bg-[#3ab44a] text-white rounded-xl w-full sm:w-auto">SCHEDULE PICKUP</button>
                    <button className="m-2 p-2 bg-[#3ab44a] text-white rounded-xl w-full sm:w-auto" onClick={handleCancel}>CANCEL PICKUP</button>
                </div>
            </form>
        </div>
    );
};

export default ManualBox;
