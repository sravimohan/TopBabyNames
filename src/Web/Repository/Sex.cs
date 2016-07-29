namespace Web.Repository
{
    public enum Sex
    {
        Boy,
        Girl
    }

    public static class SexExtensions
    {
        public static string ToDatabaseString(this Sex sex)
        {
            return sex == Sex.Boy ? "B" : "G";
        }

        public static Sex ToEnum(this string sex)
        {
            return sex.Trim().ToUpper() == "B" ? Sex.Boy : Sex.Girl;
        }
    }
}
