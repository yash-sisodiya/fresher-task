import axios from 'axios';
import React, { Component } from 'react';

export default class APIServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    //Dummy Apis
    getLastMonthData() {

        const details = [{
            "Portable Speaker": '+ $1200'
        }, {
            'Portable Headphone': 'In Stock'
        },
        { 'Speaker': 'Out of stock' },
        { 'Watch': 'Low Stock' }
        ]

        return [{
            "data": details,
        }];
    }

    getAuthorData() {
        const data = [
            {
                "name": "Admin",
                "description": 'risus quis varius  quam lacus',
                'dp': 'user'
            },
            {
                "name": "Admin 2",
                "description": 'risus quis varius quam  etiam non quam lacus',
                'dp': 'user'
            },
            {
                "name": "Admin 3",
                "description": 'risus quis varius pulvinar etiam non quam lacus',
                'dp': 'user'
            },
        ]

        return [{
            "data": data,
        }];

    }

    getTableData() {
        const data = [
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'speaker'
            },
            {
                "title": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt",
                "description": 'risus quis varius  quam lacus',
                'category': 'headphone'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'watch'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'speaker'
            },
            {
                "title": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt",
                "description": 'risus quis varius  quam lacus',
                'category': 'headphone'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'watch'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'speaker'
            },
            {
                "title": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt",
                "description": 'risus quis varius  quam lacus',
                'category': 'headphone'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'watch'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'speaker'
            },
            {
                "title": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt",
                "description": 'risus quis varius  quam lacus',
                'category': 'headphone'
            },
            {
                "title": "placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
                "description": 'risus quis varius  quam lacus',
                'category': 'watch'
            },
        ]
        const page = '3'

        return [{
            "data": data,
            "totalPage": page
        }];

    }

    getSalesGraphData() {

        const details = {
            labels: ['', 2012, 2013, 2014, 2015, 2016, 2017, 2018,2019,2020],
            datasets: [
                {
                    borderColor: "rgb(102,51,153)",
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: [
                        '', 43322, 13837, -22984, 53244, -34343, 13811, 28508, 34014,-34222,94432
                    ]
                }
            ]
        }

        return [{
            "data": details,
        }];
    }
}