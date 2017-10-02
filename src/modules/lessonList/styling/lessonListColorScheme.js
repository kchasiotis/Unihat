import {colorPalette} from "../../../../theme/colorPalette";

const colorScheme = {
    loadingList: {
        background: colorPalette.willowGrove,
        textColor: colorPalette.white,
    },
    emptyList: {
        background: null,
        textColor: colorPalette.willowGrove,
    },
    lessonList: {
        background: colorPalette.white,
        text: colorPalette.black,
        success: colorPalette.success,
        failure: colorPalette.failure,
        cancelled: colorPalette.black,
    }
};

export default colorScheme;