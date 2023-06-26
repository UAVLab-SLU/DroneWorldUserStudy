import airsim
import threading
import sys
import argparse

class SurveyNavigator:
    def __init__(self, args):
        self.droneNum = 20
        self.boxsize = args.size
        self.stripewidth = args.stripewidth
        self.altitude = args.altitude
        self.velocity = args.speed
        self.client = airsim.MultirotorClient()
        self.drones = {}
        for i in range(1,self.droneNum):
            self.client.enableApiControl(True, "Drone"+str(i))
            self.client.armDisarm(True, "Drone"+str(i))
        
    def takeoff(self, num):
        self.client.takeoffAsync(vehicle_name="Drone"+str(num))
    

    def start(self):
        print("arming the drone...")
        for i in range(1, self.droneNum):
            self.client.armDisarm(True,vehicle_name="Drone"+str(i))

        # landed = self.client.getMultirotorState().landed_state
        # if landed == airsim.LandedState.Landed:
        print("taking off...")
        for i in range(1,self.droneNum):
            thread = threading.Thread(target=self.takeoff,args=(i,))
            thread.start()
            
        # for i in self.drones: 
        #     #sync takeoff
        #     self.drones[i].join()


        # print("landing...")
        # self.client.landAsync().join()

        # print("disarming.")
        # self.client.armDisarm(False)

if __name__ == "__main__":
    args = sys.argv
    args.pop(0)
    arg_parser = argparse.ArgumentParser("Usage: survey boxsize stripewidth altitude")
    arg_parser.add_argument("--size", type=float, help="size of the box to survey", default=50)
    arg_parser.add_argument("--stripewidth", type=float, help="stripe width of survey (in meters)", default=10)
    arg_parser.add_argument("--altitude", type=float, help="altitude of survey (in positive meters)", default=30)
    arg_parser.add_argument("--speed", type=float, help="speed of survey (in meters/second)", default=5)
    args = arg_parser.parse_args(args)
    nav = SurveyNavigator(args)
    nav.start()