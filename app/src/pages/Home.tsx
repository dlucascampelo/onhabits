import { ScrollView, Text, View } from "react-native";
import { generateDatesRange } from "../utils/generateDatesRange";


import { HabitDay, DAY_SQUARE_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";


export function Home() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const datesFromYearStart = generateDatesRange();
  const minimumDatesAcceptable = 18 * 5;
  const minimumDaysToFill = minimumDatesAcceptable - datesFromYearStart.length;

  return (
    <View className="flex-1 bg-background px-8 py-16 ">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((day, index) => (
            <Text key={`${day}-${index}`}
              className='text-zinc-400 text-xl font-bold text-center mx-1'
              style={{ width: DAY_SQUARE_SIZE, height: DAY_SQUARE_SIZE }}
            >
              {day}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map(date => {
            return (
              <HabitDay key={date.toISOString()} />
            )
          })}

          {minimumDaysToFill > 0 && Array.from({ length: minimumDaysToFill }).map((_, index) => {
            return (
              <View
                key={index}
                className='bg-zinc-900 rounded-lg border-2 border-zinc-800 m-1 opacity-40'
                style={{ width: DAY_SQUARE_SIZE, height: DAY_SQUARE_SIZE }}
              />
            )
          })}

        </View>
      </ScrollView>
    </View>
  );

};