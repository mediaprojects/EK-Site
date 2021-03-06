<?php 
get_header(); ?>
<div class="row">
	<div class="span8" id="main">
	<?php if (have_posts()) : ?>
		<div class="post-full">
		<?php while(have_posts()) : the_post(); ?>
			<h1><?php the_title(); ?></h1>
			<?php get_template_part('/partials/post', 'actions') ?>
			<div class="post-content">
				<?php the_content(); ?>
			</div> <!-- /.post-content -->
			<?php get_template_part('/partials/post', 'actions') ?>
		<?php endwhile; // have_posts() ?>
		</div> <!-- /.post-full -->
	<?php else : // have_posts() ?>
		<p>Post not found.</p>
	<?php endif; // have_posts() ?>
	</div> <!-- /#main -->
	<div class="span4" id="sidebar">
		<?php get_sidebar(); ?>
	</div> <!-- /#sidebar -->
</div> <!-- /.row -->
<?php get_footer(); ?>