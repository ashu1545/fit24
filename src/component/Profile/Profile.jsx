import { Button } from "react-native-paper"
import LongCard from "src/component/LongCard/LongCard"
import LatestActivityPicOne from "assets/latestActivityPicOne.svg"
import Layout from "src/component/Layouts/Layout/Layout"
import MiniCard from "src/component/MiniCard/MiniCard"
import { View, Text } from "react-native"
import DisplayHeader from "../DisplayHeader/DisplayHeader"
import PersonalDataIcon from "assets/personalData.svg"
import ArrowIcon from "assets/arrowIcon.svg"
import AchievementIcon from "assets/achievementIcon.svg"
import ActivityHistoryIcon from "assets/activityHistoryIcon.svg"
import WorkoutProgressIcon from "assets/workoutProgressIcon.svg"
import PopupNotificationIcon from "assets/popupNotificationIcon.svg"
import ContactUsIcon from "assets/contactUsIcon.svg"
import PrivacyPolicyIcon from "assets/privacyPolicyIcon.svg"
import GearSettingsIcon from "assets/gearSettingsIcon.svg"

const Profile = () => {

    return (
        <Layout>
            <LongCard
                avatar={<LatestActivityPicOne />}
                title={'Stefani Wong'}
                subtitle={'Lose a Fat Program'}
                backgroundColor={'#1B1B1B'}
                rightIcon={<Button
                    mode="contained" theme={{ colors: { primary: '#EB8F63' } }}
                    style={{ justifyContent: 'center' }}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                >
                    Edit
                </Button>}
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
                    left={<>
                        <PersonalDataIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Personal Data</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <AchievementIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Achievement</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <ActivityHistoryIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Activity History</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <WorkoutProgressIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Workout Progress</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
            </View>

            <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 30, padding: 15 }}>
                <Text style={{ color: '#DDDADA', lineHeight: 24, fontSize: 16, paddingLeft: 7, marginBottom: 6, fontWeight: 'semibold' }}>Notification
                </Text>
                <DisplayHeader
                    left={<>
                        <PopupNotificationIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Pop-up Notification</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />

            </View>

            <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 30, padding: 15 }}>
                <Text style={{ color: '#DDDADA', lineHeight: 24, fontSize: 16, paddingLeft: 7, marginBottom: 6, fontWeight: 'semibold' }}>Other
                </Text>
                <DisplayHeader
                    left={<>
                        <ContactUsIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Contact Us</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <PrivacyPolicyIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Privacy Policy</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />
                <DisplayHeader
                    left={<>
                        <GearSettingsIcon style={{ marginRight: 10 }} />
                        <Text style={{ color: '#EB8F63' }}>Settings</Text>
                    </>}
                    marginTop={0}
                    right={<ArrowIcon />}
                />

            </View>
        </Layout>
    )
}

export default Profile