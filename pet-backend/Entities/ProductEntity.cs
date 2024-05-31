namespace pet_backend.Entities
{
    public class ProductEntity
    {
        public int Id { get; set; }

        public string Brand { get; set; }
         public string Title { get; set; }

        public DateTime CreatedAt  { get; set; }

        public DateTime UpdatedAt { get; set;}
    }
}
