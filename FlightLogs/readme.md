# Scenario

| **Example Requirements Under Test**    |                                             |
|----------------------------------------|---------------------------------------------|
| Req ID RQ-034                          | sUAS must complete missions successfully at wind speeds of 15mph. |
| Req ID RQ-035                          | No sUAS shall enter airspace marked as a no-fly zone. |

| **Test Description**                   |                                             |
|----------------------------------------|---------------------------------------------|
| Test Description                       | TST-0023: sUAS deployed in a search and rescue activity at the beach |

| **Environment Configuration Parameters** |                                             |
|----------------------------------------|---------------------------------------------|
| Weather                                | (wind=15mph, 0 < ALT < 400ft AGL)           |
| Signal                                 | (RadioInterference=Light)                    |

| **sUAS Configuration Parameters**      |                                             |
|----------------------------------------|---------------------------------------------|
| Location                               | (Region=BEACH*)                             |

| **Monitors Configurations Parameters** |                                             |
|----------------------------------------|---------------------------------------------|
| Mission Props                          | C2.1 No Fly Zone = Beach Area                |
|                                        | C2.2 Safe Landing Spots = Anywhere on Ground except water. |
|                                        | C2.3 Drift < 10% when Wind >= 23mph.         |

| **DSuT Flights**                       |                                             |
|----------------------------------------|---------------------------------------------|
| Test 1:                                | Four sUAS deployed for search and rescue. They fly over the water and the dunes to search for the lost child. Simulation lasts 20 minutes. |




# Flight Logs

#### Wind=23mph	
Px4 Flight Log

https://review.px4.io/plot_app?log=a8b682da-d18d-4068-a1d2-a8b30bdda016



#### Wind = 30mph	
Px$ Flight Log
https://review.px4.io/plot_app?log=ca772373-413b-4eba-bc2f-229abe2b4eee
