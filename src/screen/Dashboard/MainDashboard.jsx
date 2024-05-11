import { Dimensions, ZScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import BannerPie from "../../../assets/bannerPie.svg"
import HeartGraph from "../../../assets/heartGraph.svg"
import { Button, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Layout from '../../component/Layout/Layout';
import SleepGraph from "../../../assets/sleepGraph.svg"
import CaloriesPie from "../../../assets/caloriesPie.svg"
import ConnectingDots from "../../../assets/connectingDots.svg"
import ProgressBar from '../../component/ProgressBar';
import graph from "../../../assets/graph.png"
import UpArrow from "../../../assets/upArrow.svg"
import WorkoutPic from "../../../assets/workoutPic.svg"
import WorkoutProceedButton from "../../../assets/workoutProceedButton.svg"
import LowerBodyWorkout from "../../../assets/lowerBodyWorkout.svg"
import AbsWorkout from "../../../assets/absWorkout.svg"

const MainDashboard = () => {

	return (
		<Layout>
			<View style={styles.header}>

				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<View>
						<Text style={{ color: "#EB8F63", fontSize: 12, lineHeight: 18 }}>Welcome Back,</Text>
						<Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold", lineHeight: 30 }}>Ankit</Text>
					</View>

					<View style={{ marginTop: -10, backgroundColor: '#050505', borderRadius: 10 }}>
						<IconButton
							icon="bell-outline"
							iconColor="#fff"
							size={25}
							onPress={() => console.log('Pressed')}
						/>
					</View>

				</View>

			</View>
			<LinearGradient
				// f5ae2a

				colors={['#EB8F63', '#EB8F63']}
				style={{ borderRadius: 20 }}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 0 }}
			>
				<View style={styles.BodyMassIndex}>
					<View style={styles.left}>
						<View>
							<Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>BMI (Body Mass Index)</Text>
							<Text style={{ color: "white", fontSize: 17, marginTop: 3, marginBottom: 10 }}>You have a normal weight</Text>
						</View>
						<View style={{ width: '60%' }}>
							<LinearGradient
								colors={['#EEA4CE', '#C58BF2']} // You can adjust the colors as needed
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								style={{ borderRadius: 50 }} // Adjust border radius as needed
							>
								<Button
									mode="contained"
									theme={{ colors: { primary: 'transparent' } }} // Set primary color to transparent
									style={{ borderRadius: 14 }}
								>
									View more
								</Button>
							</LinearGradient>

						</View>
					</View >
					<View style={styles.innerBody1}>
						{/* <Image source={BannerPie} alt="banner_Image" style={styles.bannerImage} /> */}
						<BannerPie width={230} height={230} style={{ marginTop: 35 }} />
					</View>
				</View>

			</LinearGradient>

			<LinearGradient
				colors={['#855138', '#855138']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={styles.BodyMassIndex2}
			>

				<View style={styles.innerBody}>

					<Text style={{ color: "#fff", fontSize: 14 }}>Today's Target</Text>


				</View >
				<View style={styles.innerBody1}>
					<Button mode="contained" theme={{ colors: { primary: '#EB8F63' } }} style={{ justifyContent: 'center' }}>
						Check
					</Button>
				</View>

			</LinearGradient>


			<View styles={{ flexdirection: "column" }}>
				<Text style={{ fontSize: 20, fontWeight: "bold", color: '#FFFFFF', marginBottom: 8 }}>
					Activity Status
				</Text>

				<View style={[styles.BodyMassIndex3, { marginTop: 10 }]}>
					<View style={styles.innerBody4}>

						<Text style={{ color: "#ffffff", fontSize: 16 }}> Heart Rate </Text>
						<Text style={{ color: "#EB8F63", fontSize: 16 }}> 78 BPM </Text>


					</View>
					<HeartGraph width={'100%'} height={60} />
				</View>
			</View>

			<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
				<View style={styles.div1} >
					{/* <Text style={styles.text}>Welcome to React Native!</Text> */}
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
						<ProgressBar
							rotationDegree='-90deg'
							width={325}
							height={20}
							flexValue={1}
							volume={'50%'}
							marginRight={30}

						/>
						<View>
							<View>
								<Text style={{ color: '#1D242A', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>Water Intake</Text>
								<Text style={{ color: '#EB8F63', lineHeight: 21, fontWeight: 600, fontSize: 14, marginTop: 10 }}>4 Liters</Text>
							</View>

							<View>
								<Text style={{ marginTop: 10, color: '#EB8F63', lineHeight: 15, fontSize: 10, letterSpacing: 0 }}>
									Real time updates
								</Text>
								<View style={{ marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
									<View>
										{/* <Image source={connectingDots}  /> */}
										<ConnectingDots />
									</View>
									<View>
										<Text style={{ color: '#EB8F63', lineHeight: 12, fontSize: 8, fontWeight: 400 }}>6am - 8am</Text>
										<Text style={{ color: '#C58BF2', lineHeight: 12, fontSize: 8, fontWeight: 500 }}>600ml</Text>

										<Text style={{ color: '#EB8F63', lineHeight: 12, fontSize: 8, marginTop: 15, fontWeight: 400 }}>9am - 11am</Text>
										<Text style={{ color: '#C58BF2', lineHeight: 12, fontSize: 8, fontWeight: 500 }}>500ml</Text>

										<Text style={{ color: '#EB8F63', lineHeight: 12, fontSize: 8, marginTop: 16, fontWeight: 400 }}>11am - 2pm</Text>
										<Text style={{ color: '#C58BF2', lineHeight: 12, fontSize: 8, fontWeight: 500 }}>1000ml</Text>

										<Text style={{ color: '#EB8F63', lineHeight: 12, fontSize: 8, marginTop: 16, fontWeight: 400 }}>2pm - 4pm</Text>
										<Text style={{ color: '#C58BF2', lineHeight: 12, fontSize: 8, fontWeight: 500 }}>700ml</Text>

										<Text style={{ color: '#EB8F63', lineHeight: 12, fontSize: 8, marginTop: 16, fontWeight: 400 }}>4pm - now</Text>
										<Text style={{ color: '#C58BF2', lineHeight: 12, fontSize: 8, fontWeight: 500 }}>900ml</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>

				<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', marginLeft: 23 }}>
					<View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 10 }}>
						<Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, marginBottom: 8, fontWeight: 500 }}>
							Sleep
						</Text>
						<Text style={{ color: '#EB8F63', lineHeight: 21, fontWeight: 'semibold' }}>8h 20m</Text>
						<SleepGraph width={'100%'} height={78} style={{ marginTop: 25 }} />
					</View>

					<View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 20, paddingTop: 20 }}>
						<Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, marginBottom: 8, fontWeight: 500 }}>Calories</Text>
						<Text style={{ color: '#EB8F63', lineHeight: 21, fontWeight: 'semibold' }}>760 kCal</Text>
						<CaloriesPie width={'100%'} height={120} style={{ marginTop: 10 }} />

					</View>
				</View>
			</View>

			<View style={{ flexDirection: 'column', marginBottom: 25 }}>
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30, marginBottom: 30 }}>
					<Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFFFFF', lineHeight: 24, fontWeight: 600 }}>Workout Progress</Text>
					<Button
						icon="chevron-down"
						mode="contained" theme={{ colors: { primary: '#EB8F63' } }}
						style={{ justifyContent: 'center' }}
						contentStyle={{ flexDirection: 'row-reverse' }}
					>
						Weekly
					</Button>
				</View>

				<View>
					<ImageBackground source={graph} style={{ height: 172, alignItems: 'center' }}>

						<View style={{ backgroundColor: '#fff', flexDirection: 'column', borderRadius: 10, padding: 10, height: 68 }}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<Text style={{ color: '#EB8F63' }}>Fri, 28 May</Text>
								<View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
									<Text>90%</Text>
									<UpArrow width={12} height={12} style={{ marginTop: 3 }} />

								</View>
							</View>
							<View><Text style={{ color: '#EB8F63' }}>Upperbody Workout</Text></View>
							<View>
								<ProgressBar
									rotationDegree='0deg'
									width={110}
									height={5}
									marginTop={4}
									volume={'88%'}
								/>
							</View>

						</View>


					</ImageBackground>
				</View>
			</View>

			<View>
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30, marginBottom: 30 }}>
					<Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFFFFF', lineHeight: 24, fontWeight: 600 }}>Latest Workout</Text>
					<Text style={{ color: '#EB8F63' }}>See more</Text>
				</View>

				<View style={{flexDirection: 'column', alignContent: 'space-between'}}>
					<View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', padding: 20, borderRadius: 20, justifyContent: 'space-between'}}>
						<WorkoutPic width={50} height={50} />
						<View>
							<Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>Fullbody Workout</Text>
							<Text style={{ color: '#A4A9AD', lineHeight: 15, fontSize: 10, fontWeight: 400 }}>180 Calories Burn | 20minutes</Text>

							<ProgressBar
								rotationDegree='0deg'
								width={191}
								height={10}
								marginTop={4}
								volume={'48%'}
							/>
						</View>
						<View>
							{/* <Image source={workoutProceedButton} style={{ width: 54, height: 54 }} /> */}
							<WorkoutProceedButton width={40} height={40} />
						</View>
					</View>

					<View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', padding: 20, borderRadius: 20, justifyContent: 'space-between', marginTop: 10  }}>
						<LowerBodyWorkout width={50} height={50} />
						<View>
							<Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>Lowerbody Workout</Text>
							<Text style={{ color: '#A4A9AD', lineHeight: 15, fontSize: 10, fontWeight: 400 }}>200 Calories Burn | 30minutes</Text>

							<ProgressBar
								rotationDegree='0deg'
								width={191}
								height={10}
								marginTop={4}
								volume={'48%'}
							/>
						</View>
						<View>
							{/* <Image source={workoutProceedButton} style={{ width: 54, height: 54 }} /> */}
							<WorkoutProceedButton width={40} height={40} />
						</View>
					</View>

					<View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', padding: 20, borderRadius: 20, justifyContent: 'space-between', marginTop: 10  }}>
						<AbsWorkout width={50} height={50} />
						<View>
							<Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>Ab Workout</Text>
							<Text style={{ color: '#A4A9AD', lineHeight: 15, fontSize: 10, fontWeight: 400 }}>180 Calories Burn | 20minutes</Text>

							<ProgressBar
								rotationDegree='0deg'
								width={191}
								height={10}
								marginTop={4}
								volume={'48%'}
							/>
						</View>
						<View>
							{/* <Image source={workoutProceedButton} style={{ width: 54, height: 54 }} /> */}
							<WorkoutProceedButton width={40} height={40} />
						</View>
					</View>
				</View>
			</View>

		</Layout>

	)
}

export default MainDashboard

const styles = StyleSheet.create({
	header: {
		flexDirection: "column",
		marginTop: 20,
		marginBottom: 20,
	},
	BodyMassIndex: {
		width: "100%",
		height: 180,
		// backgroundColor: "#DA840D",


		borderRadius: 20,
		flexDirection: "row",
		// justifyContent:"center",
		alignItems: "center"
	},
	BodyMassIndex2: {
		marginTop: 20,
		marginBottom: 20,
		width: "100%",
		height: 80,
		// backgroundColor: "#CFD6FD",
		borderRadius: 20,
		flexDirection: "row",
		// justifyContent:"center",
		alignItems: "center"
	},

	BodyMassIndex3: {
		// marginTop:20,
		// width: "100%",
		height: 180,
		backgroundColor: "#855138",
		borderRadius: 20,
		flexDirection: "column",
		// justifyContent:"center",
		// alignItems: "center"
	},
	left: {
		width: '50%',
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		marginLeft: 20,
		alignContent: 'space-between',
		gap: 10,
		// marginRight: 14


	},
	innerBody: {
		flexDirection: "column",
		width: '50%',
		height: "100%",
		justifyContent: "center",
		//alignItems:"center",
		marginLeft: 20,
		gap: 10,

	},
	innerBody4: {
		flexDirection: "column",
		width: "100%",
		height: "30%",
		// justifyContent: "center",
		//alignItems:"center",
		marginLeft: 20,
		marginTop: 35,
		gap: 10,

	},
	innerBody5: {

		// width: "100%",
		// height: "70%",




	},
	innerBody1: {
		width: "50%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	ImageContainer: {
		width: "100%",
		height: 200,
		alignItems: "center",
		justifyContent: "center"
	},
	background: {
		//flex: 1,
		resizeMode: 'cover', // or 'stretch', 'contain', 'repeat' as per your requirement
		justifyContent: 'center',
		width: "100%",
		height: "100%"
	},


	//my own

	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingHorizontal: 10,
	},
	div1: {
		width: '45%',
		// height: 500,
		backgroundColor: 'white',
		borderRadius: 20,
		// justifyContent: 'center',
		// alignItems: 'center',
		padding: 30
		// marginTop: 35,
	},
	div2Container: {
		width: '45%',
		marginTop: 35,
	},
	div2Top: {
		height: 100,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		padding: 10,
		borderRadius: 20,
	},
	div2Bottom: {
		height: 100,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 20,
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 10,
	},

})

// { fontWeight: '100' }, // Thin
// { fontWeight: '200' }, // Ultra Light
// { fontWeight: '300' }, // Light
// { fontWeight: '400' }, // Regular
// { fontWeight: '500' }, // Medium
// { fontWeight: '600' }, // Semibold
// { fontWeight: '700' }, // Bold
// { fontWeight: '800' }, // Heavy
// { fontWeight: '900' }, // Black
