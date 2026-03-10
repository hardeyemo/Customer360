import { useParams, Link } from "react-router-dom";
import CustomerHistory from "./CustomerHistory";

const customers = [
    {
        id: 1,
        name: "John Carter",
        status: "Active",
        phone: "+31 6 11223344",
        email: "johncarter@gmail.com",
        orders: 8,
        sessions: 15,
        amount: "€1,250",
        lastActivity: "2024-01-10 / 12:30PM",
        snapshot: "John booked a haircut through WhatsApp chatbot.",
        memberSince: "Jan 2022",
        preferredTime: "Morning",
        loyalty: "320 pts",
        totalSpent: "€1,250",
        preferredAssets: "Haircut, Beard Trim",
        lastVisit: "10 Jan 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 2,
        name: "Sophia Williams",
        status: "Active",
        phone: "+31 6 88997766",
        email: "sophiaw@gmail.com",
        orders: 15,
        sessions: 30,
        amount: "€4,100",
        lastActivity: "2024-02-02 / 09:10AM",
        snapshot: "Sophia frequently books spa sessions.",
        memberSince: "Aug 2021",
        preferredTime: "Evening",
        loyalty: "540 pts",
        totalSpent: "€4,100",
        preferredAssets: "Spa, Facial",
        lastVisit: "2 Feb 2024",
        contactMethod: "Instagram"
    },
    {
        id: 3,
        name: "Michael Brown",
        status: "Inactive",
        phone: "+31 6 44556677",
        email: "michaelbrown@gmail.com",
        orders: 5,
        sessions: 9,
        amount: "€650",
        lastActivity: "2023-12-18 / 15:00PM",
        snapshot: "Michael last visited in December.",
        memberSince: "Mar 2023",
        preferredTime: "Afternoon",
        loyalty: "120 pts",
        totalSpent: "€650",
        preferredAssets: "Massage",
        lastVisit: "18 Dec 2023",
        contactMethod: "Email"
    },
    {
        id: 4,
        name: "Emma Watson",
        status: "Active",
        phone: "+31 6 22114455",
        email: "emmawatson@gmail.com",
        orders: 12,
        sessions: 20,
        amount: "€2,200",
        lastActivity: "2024-01-30 / 10:00AM",
        snapshot: "Emma regularly books salon appointments.",
        memberSince: "Feb 2021",
        preferredTime: "Afternoon",
        loyalty: "400 pts",
        totalSpent: "€2,200",
        preferredAssets: "Haircut, Facial",
        lastVisit: "30 Jan 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 5,
        name: "Daniel Smith",
        status: "Active",
        phone: "+31 6 55667788",
        email: "danielsmith@gmail.com",
        orders: 9,
        sessions: 14,
        amount: "€1,400",
        lastActivity: "2024-02-01 / 16:20PM",
        snapshot: "Daniel books through the mobile app.",
        memberSince: "Jun 2022",
        preferredTime: "Evening",
        loyalty: "280 pts",
        totalSpent: "€1,400",
        preferredAssets: "Haircut, Massage",
        lastVisit: "1 Feb 2024",
        contactMethod: "App"
    },
    {
        id: 6,
        name: "Olivia Taylor",
        status: "Active",
        phone: "+31 6 99112233",
        email: "oliviataylor@gmail.com",
        orders: 18,
        sessions: 40,
        amount: "€5,000",
        lastActivity: "2024-02-05 / 11:10AM",
        snapshot: "Olivia is a platinum loyalty member.",
        memberSince: "Jan 2020",
        preferredTime: "Morning",
        loyalty: "900 pts",
        totalSpent: "€5,000",
        preferredAssets: "Spa, Haircut",
        lastVisit: "5 Feb 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 7,
        name: "Liam Anderson",
        status: "Inactive",
        phone: "+31 6 33445566",
        email: "liama@gmail.com",
        orders: 4,
        sessions: 6,
        amount: "€350",
        lastActivity: "2023-11-15 / 09:00AM",
        snapshot: "Liam has not visited recently.",
        memberSince: "Mar 2023",
        preferredTime: "Morning",
        loyalty: "80 pts",
        totalSpent: "€350",
        preferredAssets: "Haircut",
        lastVisit: "15 Nov 2023",
        contactMethod: "Email"
    },
    {
        id: 8,
        name: "Noah Martinez",
        status: "Active",
        phone: "+31 6 22334455",
        email: "noahmartinez@gmail.com",
        orders: 10,
        sessions: 18,
        amount: "€1,900",
        lastActivity: "2024-01-21 / 13:30PM",
        snapshot: "Noah booked a massage session.",
        memberSince: "Jul 2021",
        preferredTime: "Afternoon",
        loyalty: "360 pts",
        totalSpent: "€1,900",
        preferredAssets: "Massage",
        lastVisit: "21 Jan 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 9,
        name: "Ava Johnson",
        status: "Active",
        phone: "+31 6 88776655",
        email: "avajohnson@gmail.com",
        orders: 13,
        sessions: 22,
        amount: "€2,800",
        lastActivity: "2024-02-03 / 17:40PM",
        snapshot: "Ava prefers weekend bookings.",
        memberSince: "Feb 2021",
        preferredTime: "Weekend",
        loyalty: "480 pts",
        totalSpent: "€2,800",
        preferredAssets: "Haircut, Spa",
        lastVisit: "3 Feb 2024",
        contactMethod: "App"
    },
    {
        id: 10,
        name: "William Clark",
        status: "Active",
        phone: "+31 6 66554433",
        email: "williamclark@gmail.com",
        orders: 7,
        sessions: 10,
        amount: "€900",
        lastActivity: "2024-01-28 / 14:10PM",
        snapshot: "William uses the chatbot booking.",
        memberSince: "Jan 2022",
        preferredTime: "Afternoon",
        loyalty: "210 pts",
        totalSpent: "€900",
        preferredAssets: "Haircut",
        lastVisit: "28 Jan 2024",
        contactMethod: "Chatbot"
    },
    {
        id: 11,
        name: "Isabella Hall",
        status: "Active",
        phone: "+31 6 77889900",
        email: "isabellah@gmail.com",
        orders: 11,
        sessions: 16,
        amount: "€1,600",
        lastActivity: "2024-02-02 / 11:00AM",
        snapshot: "Isabella books beauty treatments.",
        memberSince: "Mar 2021",
        preferredTime: "Morning",
        loyalty: "400 pts",
        totalSpent: "€1,600",
        preferredAssets: "Facial, Spa",
        lastVisit: "2 Feb 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 12,
        name: "James Allen",
        status: "Inactive",
        phone: "+31 6 10101010",
        email: "jamesallen@gmail.com",
        orders: 3,
        sessions: 5,
        amount: "€200",
        lastActivity: "2023-10-10 / 12:00PM",
        snapshot: "James hasn't visited recently.",
        memberSince: "Jul 2022",
        preferredTime: "Morning",
        loyalty: "50 pts",
        totalSpent: "€200",
        preferredAssets: "Massage",
        lastVisit: "10 Oct 2023",
        contactMethod: "Email"
    },
    {
        id: 13,
        name: "Charlotte Young",
        status: "Active",
        phone: "+31 6 20202020",
        email: "charlotte@gmail.com",
        orders: 14,
        sessions: 25,
        amount: "€3,000",
        lastActivity: "2024-02-04 / 15:20PM",
        snapshot: "Charlotte is a frequent customer.",
        memberSince: "Apr 2021",
        preferredTime: "Afternoon",
        loyalty: "560 pts",
        totalSpent: "€3,000",
        preferredAssets: "Spa, Haircut",
        lastVisit: "4 Feb 2024",
        contactMethod: "App"
    },
    {
        id: 14,
        name: "Benjamin King",
        status: "Active",
        phone: "+31 6 30303030",
        email: "benking@gmail.com",
        orders: 6,
        sessions: 9,
        amount: "€750",
        lastActivity: "2024-01-12 / 10:45AM",
        snapshot: "Benjamin books grooming services.",
        memberSince: "May 2022",
        preferredTime: "Morning",
        loyalty: "180 pts",
        totalSpent: "€750",
        preferredAssets: "Haircut, Beard Trim",
        lastVisit: "12 Jan 2024",
        contactMethod: "Chatbot"
    },
    {
        id: 15,
        name: "Amelia Scott",
        status: "Active",
        phone: "+31 6 40404040",
        email: "ameliascott@gmail.com",
        orders: 20,
        sessions: 50,
        amount: "€6,500",
        lastActivity: "2024-02-06 / 09:40AM",
        snapshot: "Amelia is a VIP client.",
        memberSince: "Jan 2020",
        preferredTime: "Morning",
        loyalty: "1200 pts",
        totalSpent: "€6,500",
        preferredAssets: "Haircut, Spa, Massage",
        lastVisit: "6 Feb 2024",
        contactMethod: "App"
    },
    {
        id: 16,
        name: "Henry Adams",
        status: "Inactive",
        phone: "+31 6 50505050",
        email: "henryadams@gmail.com",
        orders: 2,
        sessions: 3,
        amount: "€120",
        lastActivity: "2023-09-20 / 08:20AM",
        snapshot: "Henry visited only twice.",
        memberSince: "Sep 2023",
        preferredTime: "Morning",
        loyalty: "20 pts",
        totalSpent: "€120",
        preferredAssets: "Haircut",
        lastVisit: "20 Sep 2023",
        contactMethod: "Email"
    },
    {
        id: 17,
        name: "Mia Baker",
        status: "Active",
        phone: "+31 6 60606060",
        email: "miabaker@gmail.com",
        orders: 16,
        sessions: 32,
        amount: "€4,200",
        lastActivity: "2024-02-07 / 13:15PM",
        snapshot: "Mia books spa services frequently.",
        memberSince: "Feb 2021",
        preferredTime: "Afternoon",
        loyalty: "800 pts",
        totalSpent: "€4,200",
        preferredAssets: "Spa, Massage",
        lastVisit: "7 Feb 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 18,
        name: "Lucas Perez",
        status: "Active",
        phone: "+31 6 70707070",
        email: "lucasperez@gmail.com",
        orders: 9,
        sessions: 12,
        amount: "€1,300",
        lastActivity: "2024-01-25 / 14:30PM",
        snapshot: "Lucas prefers afternoon bookings.",
        memberSince: "Mar 2022",
        preferredTime: "Afternoon",
        loyalty: "270 pts",
        totalSpent: "€1,300",
        preferredAssets: "Haircut",
        lastVisit: "25 Jan 2024",
        contactMethod: "App"
    },
    {
        id: 19,
        name: "Harper Evans",
        status: "Active",
        phone: "+31 6 80808080",
        email: "harperevans@gmail.com",
        orders: 7,
        sessions: 11,
        amount: "€850",
        lastActivity: "2024-01-29 / 10:10AM",
        snapshot: "Harper uses WhatsApp bookings.",
        memberSince: "Jan 2022",
        preferredTime: "Morning",
        loyalty: "210 pts",
        totalSpent: "€850",
        preferredAssets: "Haircut",
        lastVisit: "29 Jan 2024",
        contactMethod: "WhatsApp"
    },
    {
        id: 20,
        name: "Jack Turner",
        status: "Active",
        phone: "+31 6 90909090",
        email: "jackturner@gmail.com",
        orders: 12,
        sessions: 19,
        amount: "€2,100",
        lastActivity: "2024-02-01 / 18:00PM",
        snapshot: "Jack often books evening sessions.",
        memberSince: "Jun 2021",
        preferredTime: "Evening",
        loyalty: "360 pts",
        totalSpent: "€2,100",
        preferredAssets: "Haircut, Massage",
        lastVisit: "1 Feb 2024",
        contactMethod: "App"
    }
];

export default function CustomerProfile() {
    const { id } = useParams();
    const customer = customers.find((c) => c.id === Number(id));

    if (!customer) {
        return (
            <div className="p-6 text-gray-500 text-center"> Customer not found </div>
        );
    }
    return (
        <div className="bg-gray-50 min-h-screen p-4 space-y-8">
            <div className="flex flex-col xl:flex-row gap-6">
                <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-col w-full lg:w-1/3 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800"> {customer.name}</h2>
                        <p className="text-gray-500 text-sm">{customer.email}</p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <StatCard label="Total Orders" value={customer.orders} />
                            <StatCard label="Chat Sessions" value={customer.sessions} />
                        </div>

                    </div>
                    <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-6 flex-1">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <Info label="Status"  value={customer.status} green={customer.status === "Active"}/>
                            <Info label="Member Since" value={customer.memberSince} />
                            <Info label="Preferred Time" value={customer.preferredTime} />
                            <Info label="Loyalty Points" value={customer.loyalty} highlight />
                            <Info label="Total Spent" value={customer.totalSpent} />
                            <Info label="Preferred Assets" value={customer.preferredAssets}/>
                            <Info label="Last Visit" value={customer.lastVisit} />
                            <Info label="Contact Method"value={customer.contactMethod}/>
                            <Info label="Phone Number" value={customer.phone} />
                        </div>
                    </div>
                </div>

                <div className="w-full xl:w-80 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold mb-3 text-gray-700"> 360° Customer Snapshot </h3>
                        <p className="text-gray-600 text-sm leading-relaxed"> {customer.name} has completed {customer.orders} orders and
                            interacted with the chatbot {customer.sessions} times. This customer prefers communication via{" "} {customer.contactMethod}.
                        </p>
                    </div>

                    <Link to="/snapshot"
                        className="mt-6 text-center border border-gray-300 text-gray-700 py-2 rounded-full hover:bg-gray-100 transition">View Details
                    </Link>
                </div>
            </div>
            <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-800">  Customer History </h2>
                <p className="text-gray-500 text-sm"> View conversation sessions and appointment history</p>
            </div>
            <CustomerHistory />
        </div>
    );
}

function Info({ label, value, green, highlight }) {
    return (
        <div>
            <p className="text-gray-400 text-xs">{label}</p>
            <p className={ green ? "text-green-600 font-medium" : highlight  ? "text-indigo-600 font-semibold": "text-gray-800 font-medium"}> {value} </p>
        </div>
    );
}

function StatCard({ label, value }) {
    return (
        <div className="w-full border border-gray-500 rounded-lg p-4 text-center bg-gray-50 hover:bg-gray-100 transition">
            <p className="text-xl font-semibold text-gray-800">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    );
}