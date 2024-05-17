import { Button } from "react-native-paper"
import LongCard from "src/component/Cards/LongCard/LongCard"
import LatestActivityPicOne from "assets/latestActivityPicOne.svg"
import Layout from "src/component/Layouts/Layout/Layout"
import MiniCard from "src/component/Cards/MiniCard/MiniCard"
import { View, Text } from "react-native"
import DisplayHeader from "../Headers/DisplayHeader/DisplayHeader"
import PersonalDataIcon from "assets/personalData.svg"
import ArrowIcon from "assets/arrowIcon.svg"
import AchievementIcon from "assets/achievementIcon.svg"
import ActivityHistoryIcon from "assets/activityHistoryIcon.svg"
import WorkoutProgressIcon from "assets/workoutProgressIcon.svg"
import PopupNotificationIcon from "assets/popupNotificationIcon.svg"
import ContactUsIcon from "assets/contactUsIcon.svg"
import PrivacyPolicyIcon from "assets/privacyPolicyIcon.svg"
import GearSettingsIcon from "assets/gearSettingsIcon.svg"
import HeaderLeftContent from "../Headers/HeaderLeftContent/HeaderLeftContent"
import HeaderButton from "../Headers/HeaderButton/HeaderButton"

const Profile = () => {

    return (
        <Layout>
            <LongCard
                avatar={<LatestActivityPicOne />}
                title={'Stefani Wong'}
                subtitle={'Lose a Fat Program'}
                backgroundColor={'#1B1B1B'}
                rightIcon={<HeaderButton>Edit</HeaderButton>}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <MiniCard
                    title={'180cm'}
                    subtitle={'Height'}
                    width={'27%'}
                />
                <MiniCard
                    title={'65kg'}
                    subtitle={'Weight'}
                    width={'27%'}
                />
                <MiniCard
                    title={'22yo'}
                    subtitle={'Age'}
                    width={'27%'}
                />
            </View>

            <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 30, padding: 15 }}>
                <Text style={{ color: '#DDDADA', lineHeight: 24, fontSize: 16, paddingLeft: 7, marginBottom: 6, fontWeight: 'semibold' }}>Account</Text>
                <DisplayHeader
                    left={
                        <HeaderLeftContent
                            headerTitle={'Personal Data'}
                            headerColor={'#EB8F63'}
                            svgIcon={<PersonalDataIcon style={{ marginRight: 10 }} />}
                        />
                    }
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <HeaderLeftContent
                            headerTitle={'Achievement'}
                            headerColor={'#EB8F63'}
                            svgIcon={<AchievementIcon style={{ marginRight: 10 }} />}
                        />
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <HeaderLeftContent
                            headerTitle={'Activity History'}
                            headerColor={'#EB8F63'}
                            svgIcon={<ActivityHistoryIcon style={{ marginRight: 10 }} />}
                        />
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <HeaderLeftContent
                            headerTitle={'Workout Progress'}
                            headerColor={'#EB8F63'}
                            svgIcon={<WorkoutProgressIcon style={{ marginRight: 10 }} />}
                        />
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
            </View>

            <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 30, padding: 15 }}>
                <Text style={{ color: '#DDDADA', lineHeight: 24, fontSize: 16, paddingLeft: 7, marginBottom: 6, fontWeight: 'semibold' }}>Notification
                </Text>
                <DisplayHeader
                    left={
                        <HeaderLeftContent
                            headerTitle={'Pop-up Notification'}
                            headerColor={'#EB8F63'}
                            svgIcon={<PopupNotificationIcon style={{ marginRight: 10 }} />}
                        />
                    }
                    marginTop={0}
                    right={<ArrowIcon />}
                />
            </View>

            <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 30, padding: 15 }}>
                <Text style={{ color: '#DDDADA', lineHeight: 24, fontSize: 16, paddingLeft: 7, marginBottom: 6, fontWeight: 'semibold' }}>Other
                </Text>
                <DisplayHeader
                    left={<>
                        <HeaderLeftContent
                            headerTitle={'Contact Us'}
                            headerColor={'#EB8F63'}
                            svgIcon={<ContactUsIcon style={{ marginRight: 10 }} />}
                        />
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <HeaderLeftContent
                            headerTitle={'Privacy Policy'}
                            headerColor={'#EB8F63'}
                            svgIcon={<PrivacyPolicyIcon style={{ marginRight: 10 }} />}
                        />
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <HeaderLeftContent
                            headerTitle={'Settings'}
                            headerColor={'#EB8F63'}
                            svgIcon={<PrivacyPolicyIcon style={{ marginRight: 10 }} />}
                        />
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />

            </View>
        </Layout>
    )
}

export default Profile