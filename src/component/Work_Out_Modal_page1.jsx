import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetModalProvider, BottomSheetModal } from "@gorhom/bottom-sheet";

const windowHeight = Dimensions.get('window').height;

const Work_Out_Modal_page1 = ({ isVisible, onClose }) => {
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                index={1}
                snapPoints={[windowHeight * 0.8, windowHeight]} // Set snapPoints to 80% and 100% of window height
                onChange={onClose}
                dismissOnPanDown={true}
                style={styles.modal}
                handleComponent={() => null}
            >
                <View style={styles.container}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    modal: {
        shadowColor: '#000',
        backgroundColor:"red",
        // shadowOffset: {
        //     width: 0,
        //     height: -2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default Work_Out_Modal_page1;
