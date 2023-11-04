import { ItemsContext } from "@/context/ItemsContext";
import { getUserLocations, createCart } from "@/services";
import React, { useContext, useEffect, useState } from "react";

function Form({ item }: any) {
    const today: any = new Date();
    const [userLocation, setUserLocation] = useState<any>([]);
    const { setShowToastMsg } = useContext(ItemsContext);

    const [formValue, setFormValue] = useState({
        location: '',
        userName: 'Sohail',
        email: '',
        couponCode: '',
        contactNumber: '',
        itemsList: {
            connect: {
                id: ''
            }
        }
    });

    const getUserLocation_ = async () => {
        const resp: any = await getUserLocations();
        setUserLocation(resp?.userLocations);
    };

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async () => {
        const resp = await createCart(formValue);
        if (resp) {
            setShowToastMsg(true);
        }
    }

    useEffect(() => {
        getUserLocation_();
    }, []);

    useEffect(() => {
        if (item) {
            setFormValue({
                ...formValue,
                itemsList: {
                    connect: {
                        id: item.id
                    }
                }
            });
        }
    }, [item]);


    return (
        <div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Choose Location</label>
                <select className="select select-bordered w-full max-w-lg"
                    name="location"
                    onChange={handleChange}
                >
                    <option disabled selected>
                        Pick a Location
                    </option>
                    {userLocation && userLocation.map((loc: any, index: number) => (
                        <option key={index}>{loc?.address}</option>
                    ))}
                </select>
            </div>
            <div className="flex gap-5 ">
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Name</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        onChange={handleChange}
                        name="userName"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Email</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        onChange={handleChange}
                        name="email"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Contact Number</label>
                <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleChange}
                    name="contactNumber"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flec-col gap-5 mb-5">
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">APPLY COUPON CODE (Optional)</label>
                    <input
                        type="text"
                        min={today}
                        onChange={handleChange}
                        placeholder="Type here"
                        name="couponCode"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="modal-action">
                <button className="btn">
                    Close
                </button>
                <button
                    className="btn bg-blue-500 text-white hover:bg-blue-800"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default Form;