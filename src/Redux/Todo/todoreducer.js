import { ALLDATA } from "./actionitems";

export function todoreducer(state = [], { type, payload }) {
    switch (type) {
        case ALLDATA: {
            return payload;
        }
        default: {
            return state;
        }
    }

}