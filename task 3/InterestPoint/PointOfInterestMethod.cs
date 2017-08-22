using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterestPoint
{
    public class PointOfInterestMethod
    {
        public void InterestPointMethod(int[] myArray)
        {
            int arrayLength = myArray.Length;
            List<int> pointOfInterst = new List<int>();

            //testing the first constraint 
            for (int i = 1; i < arrayLength; i++)
            {
                try
                {
                    if ((myArray[i] >= myArray[i - 1]) && (myArray[i] >= myArray[i + 1]))
                    {
                        pointOfInterst.Add(i);
                    }
                }
                catch (Exception e)
                {

                }

            }

            //second constraint 
            for (int i = 0; i < arrayLength; i++)
            {
                try
                {
                    if ((i == 0) && (myArray[i] >= myArray[1]))
                    {
                        pointOfInterst.Add(i);
                    }
                }
                catch (Exception e)
                {

                }

            }

            //third constraint 
            for (int i = 1; i < arrayLength; i++)
            {
                try
                {
                    if ((i == (arrayLength - 1)) && myArray[i] >= myArray[i - 1])
                    {
                        pointOfInterst.Add(i);
                    }
                }
                catch (Exception e)
                {

                }

            }

            if (pointOfInterst != null)
            {
                Console.WriteLine("Point of Interset are at index of: ");
                foreach (var item in pointOfInterst)
                {
                    Console.Write(myArray[item]);
                    Console.Write(" ");
                }
            }
            else
            {
                Console.WriteLine("No point of Interset");
            }

            Console.ReadLine();
        }
    }
}
