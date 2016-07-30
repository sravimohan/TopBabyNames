namespace Web.Model
{
    public class NameRank
    {
        public int Id { get; set; }
        public int Year { get; set; }
        public int Rank { get; set; }
        public string Name { get; set; }
        public int Total { get; set; }
        public string Sex { get; set; }

        public override string ToString()
        {
            return $"{Year} \t {Rank} \t {Name} \t {Total} \t {Sex}";
        }
    }
}
