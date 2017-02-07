'use strict';

import React from "react";
import Service from "./service";
import services from "../data/services";
import TranscludedComponent from "./transcluded_component";

export default class signup extends React.Component {
    render () {
        return <div>
            <div>
                {services.map(service_instance => <Service key={service_instance.id} name={service_instance.name}></Service>)}
            </div>
            <TranscludedComponent/>
        </div>;
    }
}