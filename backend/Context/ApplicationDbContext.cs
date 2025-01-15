using Microsoft.EntityFrameworkCore;
using pet_backend.Entities;

namespace pet_backend.Context
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {
        
        }

        public DbSet<ProductEntity> Products {  get; set; }
    }
}
