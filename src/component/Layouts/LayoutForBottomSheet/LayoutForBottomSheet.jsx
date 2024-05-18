import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView} from '@gorhom/bottom-sheet';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useRef } from "react";

const windowHeight = Dimensions.get('window').height;

const windowWidth = Dimensions.get('window').width;


const LayoutForBottomSheet = ({ children, backgroundColor }) => {
    const sheetRef = useRef(null);
    return (
        <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={[windowHeight * 0.65, windowHeight]}
            style={{ backgroundColor: backgroundColor }}
        >
            <BottomSheetScrollView style={{ backgroundColor: backgroundColor, paddingHorizontal: 20 }}>
                {children}
            </BottomSheetScrollView>
        </BottomSheet>
    )
}

export default LayoutForBottomSheet