const state = {
    datePickerProperties: {
        id: "date-picker",
        type: "daterange",
        rangeSeparator: "To",
        startPlaceholder: "Start date",
        endPlaceholder: "End date",
        format: "dd-MM-yyyy",
        valueFormat: "yyyy-MM-dd"
    }
};

const getters = {
    datePickerProperties: (state) => state.datePickerProperties
};

export default {
    state,
    getters
}