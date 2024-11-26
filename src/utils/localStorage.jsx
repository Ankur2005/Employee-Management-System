const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "ankur@ankur.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare monthly report",
                "description": "Compile data for the monthly financial report.",
                "date": "2024-11-20",
                "category": "Finance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team meeting",
                "description": "Discuss Q4 targets with the team.",
                "date": "2024-11-21",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Review project proposals",
                "description": "Provide feedback on new project proposals.",
                "date": "2024-11-23",
                "category": "Operations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Schedule training",
                "description": "Arrange training for new hires.",
                "date": "2024-11-18",
                "category": "HR",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Inventory check",
                "description": "Update stock inventory for Q3.",
                "date": "2024-11-22",
                "category": "Logistics",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Ishaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Client follow-up",
                "description": "Follow up with potential clients from the last meeting.",
                "date": "2024-11-19",
                "category": "Sales",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Product launch review",
                "description": "Analyze the performance of the recent product launch.",
                "date": "2024-11-21",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Audit compliance check",
                "description": "Verify audit requirements for compliance.",
                "date": "2024-11-25",
                "category": "Legal",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Anaya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design landing page",
                "description": "Create a new design for the company website landing page.",
                "date": "2024-11-20",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "System maintenance",
                "description": "Perform routine system maintenance and updates.",
                "date": "2024-11-22",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Bug fixing",
                "description": "Fix high-priority bugs in the application.",
                "date": "2024-11-23",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare code review",
                "description": "Prepare for the quarterly code review session.",
                "date": "2024-11-24",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Saanvi",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Market research",
                "description": "Gather market data for the new product launch.",
                "date": "2024-11-20",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Presentation for stakeholders",
                "description": "Prepare and deliver presentation for stakeholders.",
                "date": "2024-11-22",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Draft press release",
                "description": "Write a draft for the new product's press release.",
                "date": "2024-11-23",
                "category": "PR",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "firstName": "Ankur",
        "email": "admin@me.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}
