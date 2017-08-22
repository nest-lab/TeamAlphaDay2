using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterestPoint
{
    class Program
    {
        static void Main(string[] args)
        {
            //test array 
            int[] myArray = { 1, 2, 1, 4, 5, 6 };
            PointOfInterestMethod locatePoint = new PointOfInterestMethod();
            locatePoint.InterestPointMethod(myArray);
            Console.ReadLine();
        }
    }
}
